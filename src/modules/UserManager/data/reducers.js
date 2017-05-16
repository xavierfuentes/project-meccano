import { combineReducers } from 'redux-immutable';

import authReducer from './Auth/reducer';

export default combineReducers({
  auth: authReducer,
});
