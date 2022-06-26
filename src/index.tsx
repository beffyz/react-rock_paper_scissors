import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/normalize.css';
import './assets/styles/flexboxgrid.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
