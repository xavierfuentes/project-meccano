import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import rootReducer from './Root/reducer';

const createReducer = asyncReducers => {
  return combineReducers({
    route: routerReducer,
    root: rootReducer,
    ...asyncReducers,
  });
};

export default createReducer;
