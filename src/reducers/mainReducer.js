import { combineReducers } from 'redux';
import task from './task';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  task,
});
