import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';

import { history } from '../redux/configureStore';
import { SignUp, SignIn } from '../pages';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
      </ConnectedRouter>
    </>
  );
}

export default App;
