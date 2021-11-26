import { useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '@redux/modules/user';
// route
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { history } from '@redux/configureStore';
// pages
import {
  Home,
  Contents,
  Detail,
  Search,
  SignUp,
  SignIn,
  SignInEmail,
  FindPwd,
  UserPage,
  ProfileEdit,
  Admin,
  AdminPostManage,
  AdminPostPreview,
  Notification,
  Alarm,
  TermsOfUse,
  Chatting,
  ChatRoom,
  MbtiTest,
  MbtiTestResult,
} from '@pages';
// components
import { Navigation, ScrollRestoration } from '@components';
// shared
import { Canvas } from '@shared/canvas';
// css
import style from './App.module.css';
// images
import logo from '@assets/logo_yellow.png';

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

    // if (!isMobile && pathname === '/') handleCanvas();
    // else return () => window.removeEventListener('load', handleCanvas);

    // return () => window.removeEventListener('load', handleCanvas);
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
      <div className={style.contentsWrap}>
        <Navigation />
        <ConnectedRouter history={history}>
          <ScrollRestoration />
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/contents' exact component={Contents} />
          <Route path='/detail/:id' exact component={Detail} />
          <Route path='/chatting' exact component={Chatting} />
          <Route path='/chatroom/:id' exact component={ChatRoom} />
          <Route path='/mbti/test' exact component={MbtiTest} />
          <Route path='/mbti/result/:id' exact component={MbtiTestResult} />
          <Route path='/userpage' exact component={UserPage} />
          <Route path='/useredit' exact component={ProfileEdit} />
          <Route path='/notification' exact component={Notification} />
          <Route path='/alarm' exact component={Alarm} />
          <Route path='/termsofuse' exact component={TermsOfUse} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signin_email' exact component={SignInEmail} />
          <Route path='/signin_findpwd' exact component={FindPwd} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/admin_write' exact component={AdminPostManage} />
          <Route path='/admin_write/:id' exact component={AdminPostManage} />
          <Route path='/admin_preview' exact component={AdminPostPreview} />
          <Route path='/admin_preview/:id' exact component={AdminPostPreview} />
        </ConnectedRouter>
      </div>
      <div className={style.bg}></div>
    </div>
  );
}

export default App;
