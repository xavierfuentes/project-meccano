import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import userManagerReducer from '../modules/UserManager/data/reducers';

export default combineReducers({
  form: formReducer,
  userManager: userManagerReducer,
});
