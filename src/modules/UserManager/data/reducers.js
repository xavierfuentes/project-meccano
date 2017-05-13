import { combineReducers } from 'redux-immutable';

import userReducer from './User/reducer';
import authReducer from './Auth/reducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
