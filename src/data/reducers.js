import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form/immutable';

import rootReducer from './Root';
import userManagerReducer from '../modules/UserManager/data/reducers';

export default combineReducers({
  form,
  root: rootReducer,
  route: routerReducer,
  userManager: userManagerReducer,
});
