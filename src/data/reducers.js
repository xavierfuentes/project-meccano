import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';

import uiReducer from './ui/reducers';
import authReducer from './auth/reducers';

export default combineReducers({
  router: router5Reducer,
  auth: authReducer,
  ui: uiReducer,
});
