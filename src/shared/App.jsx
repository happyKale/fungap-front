import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';

import { history } from '../redux/configureStore';
import {
  SignUp,
  SignIn,
  Admin,
  AdminPostManage,
  AdminPostPreview,
} from '../pages';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/admin' exact component={Admin} />
        <Route path='/admin_write' exact component={AdminPostManage} />
        <Route path='/admin_preview' exact component={AdminPostPreview} />
      </ConnectedRouter>
    </>
  );
}

export default App;
