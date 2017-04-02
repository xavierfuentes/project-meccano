import { combineReducers } from 'redux-immutable';

import userReducer from './User/reducer';
import signinReducer from './Signin/reducer';
import signupReducer from './Signup/reducer';

export default combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  user: userReducer,
});
