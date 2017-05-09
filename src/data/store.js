import { createStore, applyMiddleware, compose } from 'redux';
import Immutable, { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import { firebaseConfig, firebaseOptions } from '../helpers/firebase';

import reducers from './reducers';
// import sagas from './../data/sagas';

// const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = Immutable.Map(), history) => {
  const middlewares = [
    // sagaMiddleware,
    routerMiddleware(history),
    thunk.withExtraArgument(getFirebase),
  ];

  const enhancers = [applyMiddleware(...middlewares), reactReduxFirebase(firebaseConfig, firebaseOptions)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  /* eslint-enable */

  const store = createStore(reducers, fromJS(initialState), composeEnhancers(...enhancers));

  // Extensions
  // sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
