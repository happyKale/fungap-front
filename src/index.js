import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import store from './redux/configureStore';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

Sentry.init({
  dsn:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SENTRY_DSN
      : false,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
