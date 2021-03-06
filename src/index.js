import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './globalStyles.scss';

render(
  <Provider store={store}>
    <App apiUrl={process.env.API_URL} />
  </Provider>,
  document.getElementById('root')
);
