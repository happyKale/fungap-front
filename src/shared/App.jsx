import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
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
  ProfileEdit,
} from '../pages';
import { Navigation } from '../components';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <div>
        {/* <Navigation /> */}
        <ConnectedRouter history={history}>
          <Route path='/' exact component={Home} />
          <Route path='/contents' exact component={Contents} />
          <Route path='/detail' exact component={Detail} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/admin_write' exact component={AdminPostManage} />
          <Route path='/userpage' exact component={Setting} />
          <Route path='/useredit' exact component={ProfileEdit} />
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
