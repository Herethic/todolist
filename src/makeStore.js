'use strict';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import mainReducer from './reducers/mainReducer';

export default function makeStore(initState) {
  const logger = createLogger();
  const store = createStore(mainReducer, initState, applyMiddleware(logger, thunk));

  return store;
}
