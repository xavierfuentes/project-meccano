import { combineReducers } from 'redux';
import { routerForBrowser } from 'redux-little-router';

import routes from './routes';
import uiReducer from './ui/reducer';

const { reducer: routerReducer } = routerForBrowser({ routes });

export default combineReducers({
  router: routerReducer,
  ui: uiReducer,
});
