import { combineReducers, createStore } from 'redux';
import user from './user';

const mainReducer = combineReducers({ user });
export default createStore(
  mainReducer,
  /*eslint-disable*/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
);
