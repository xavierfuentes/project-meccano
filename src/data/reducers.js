// import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import rootReducer from './Root/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    // route: routeReducer,
    root: rootReducer,
    // language: languageProviderReducer,
    ...asyncReducers,
  });
}