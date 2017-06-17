import { createStore, applyMiddleware, compose } from 'redux';
import { router5Middleware } from 'redux-router5';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import sagas from './../data/sagas';

const configureStore = (router, initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = router5Middleware(router);
  const loggerMiddleware = createLogger();
  const middlewares = [loggerMiddleware, routerMiddleware, sagaMiddleware];
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
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
