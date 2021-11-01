import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';

import { history } from '../redux/configureStore';
import { SignUp, SignIn, Detail } from '../pages';
import { Navigation } from '../components';

import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <div>
        {/* <Navigation /> */}
        <ConnectedRouter history={history}>
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/detail' exact component={Detail} />
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
