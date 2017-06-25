import { createStore, applyMiddleware, compose } from 'redux';
import { router5Middleware } from 'redux-router5';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const configureStore = (router, initialState) => {
  const routerMiddleware = router5Middleware(router);
  const loggerMiddleware = createLogger({ collapsed: true });
  const middlewares = [routerMiddleware, thunkMiddleware, loggerMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  /* eslint-enable */

  const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

  // Extensions

  return store;
};

export default configureStore;
