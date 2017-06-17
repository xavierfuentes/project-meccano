import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';

import uiReducer from './ui/reducer';

export default combineReducers({
  router: router5Reducer,
  ui: uiReducer,
});
