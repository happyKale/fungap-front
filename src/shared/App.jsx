import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { history } from '../redux/configureStore';
import {
  Home,
  Detail,
  SignUp,
  SignIn,
  Admin,
  AdminPostManage,
  AdminPostPreview,
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
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/detail' exact component={Detail} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/admin_write' exact component={AdminPostManage} />
          <Route path='/admin_preview' exact component={AdminPostPreview} />
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
