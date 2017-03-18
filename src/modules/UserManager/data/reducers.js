import { combineReducers } from 'redux-immutable';

import userReducer from './User/reducer';
import signupReducer from './Signup/reducer';

export default combineReducers({
  signup: signupReducer,
  user: userReducer,
});
