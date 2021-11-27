import { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Canvas } from '../shared/canvas';
import { userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import {
  Home,
  Contents,
  Detail,
  SignUp,
  SignIn,
  EmailSignIn,
  FindPwd,
  Admin,
  AdminPostManage,
  AdminPostPreview,
  Setting,
  ProfileEdit,
  Notification,
  Alarm,
  TermsofUse,
  Chatting,
  ChatRoom,
  Search,
  Compatibility,
  CompatibilityResult,
  GameWrite,
  GameDetail,
  GameList,
  GameResult,
  ContentsAll,
} from '../pages';
import { Navigation, ScrollRestoration } from '../components';
import style from './App.module.css';
import logo from '../assets/logo_yellow.png';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useSelector(state => state.router.location);

  useEffect(() => {
    dispatch(userActions.signinCheckDB());

    // const isMobile = /iPhone|iPad|iPod|Android/i.test(
    //   window.navigator.userAgent,
    // );

    // function handleCanvas() {
    //   return new Canvas();
    // }

    // if (!isMobile) handleCanvas();

    // return () =>
    //   window.removeEventListener('load', () => {
    //     if (isMobile) {
    //       handleCanvas();
    //     }
    //   });
  }, []);

  return (
    <div
      className={
        !pathname.includes('admin') ? style.container : style.wideContainer
      }
    >
      <img
        src={logo}
        className={!pathname.includes('admin') ? style.logo : style.adminlogo}
        alt='로고'
      />
      <div>
        <Navigation />
        <ConnectedRouter history={history}>
          <ScrollRestoration></ScrollRestoration>
          <Route path='/' exact component={ContentsAll} />
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/search' exact component={Search} />
          <Route path='/contents' exact component={Contents} />
          <Route path='/detail/:id' exact component={Detail} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signin_email' exact component={EmailSignIn} />
          <Route path='/signin_findpwd' exact component={FindPwd} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/userpage' exact component={Setting} />
          <Route path='/useredit' exact component={ProfileEdit} />
          <Route path='/admin_write' exact component={AdminPostManage} />
          <Route path='/admin_write/:id' exact component={AdminPostManage} />
          <Route path='/admin_preview' exact component={AdminPostPreview} />
          <Route path='/admin_preview/:id' exact component={AdminPostPreview} />
          <Route path='/notification' exact component={Notification} />
          <Route path='/alarm' exact component={Alarm} />
          <Route path='/termsofuse' exact component={TermsofUse} />
          <Route path='/chatting' exact component={Chatting} />
          <Route path='/chatroom/:id' exact component={ChatRoom} />
          <Route path='/compatibility' exact component={Compatibility} />
          <Route path='/game_write' exact component={GameWrite} />
          <Route path='/game_write/:id' exact component={GameWrite} />
          <Route path='/games' exact component={GameList} />
          <Route path='/game/:id' exact component={GameDetail} />
          <Route path='/game/:id/result' exact component={GameResult} />
          <Route
            path='/compatibility/result/:id'
            exact
            component={CompatibilityResult}
          />
          {/* <Route path='/contents_all' exact component={ContentsAll} /> */}
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
