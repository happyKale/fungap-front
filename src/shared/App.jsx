import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';

import { history } from '../redux/configureStore';
import { SignUp } from '../pages';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/signup' exact component={SignUp} />
      </ConnectedRouter>
    </>
  );
}

export default App;
