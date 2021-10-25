import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./shared/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <input type="text" style={{ fontSize: "20px" }} />
  </React.StrictMode>,
  document.getElementById('root'),
);
