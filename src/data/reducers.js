import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable';
import { firebaseStateReducer } from 'react-redux-firebase';

import userManagerReducer from '../modules/UserManager/data/reducers';

export default combineReducers({
  firebase: firebaseStateReducer,
  form: formReducer,
  route: routerReducer,
  userManager: userManagerReducer,
});
