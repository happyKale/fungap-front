import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { useSelector } from 'react-redux';

import { history } from '../redux/configureStore';
import {
  Home,
  Contents,
  Detail,
  SignUp,
  SignIn,
  Admin,
  AdminPostManage,
  Setting,
} from '../pages';
import { Navigation } from '../components';
import style from './App.module.css';

function App() {
  const { pathname } = useSelector(state => state.router.location);

  return (
    <div
      className={
        !pathname.includes('admin') ? style.container : style.wideContainer
      }
    >
      <div>
        {/* {pathname.includes('sign') ? '' : <Navigation />} */}
        <Navigation />
        <ConnectedRouter history={history}>
          <Route path='/' exact component={Home} />
          <Route path='/contents' exact component={Contents} />
          <Route path='/detail' exact component={Detail} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/admin_write' exact component={AdminPostManage} />
          <Route path='/userpage' exact component={Setting} />
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
