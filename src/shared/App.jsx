import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import Signup from '../pages/Signup';

import { history } from '../redux/configureStore';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/signup' exact component={Signup} />
      </ConnectedRouter>
    </>
  );
}

export default App;
