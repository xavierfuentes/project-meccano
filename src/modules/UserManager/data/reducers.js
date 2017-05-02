import { combineReducers } from 'redux-immutable';

import userReducer from './User/reducer';
import signinReducer from './Signin/reducer';

export default combineReducers({
  signin: signinReducer,
  user: userReducer,
});
