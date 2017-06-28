import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';

import authReducer from './auth/reducers';
import propertiesReducer from './properties/reducers';
import uiReducer from './ui/reducers';

export default combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  router: router5Reducer,
  ui: uiReducer,
});
