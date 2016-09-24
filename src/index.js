'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import makeStore from './makeStore'; 

const store = makeStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
