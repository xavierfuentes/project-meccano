import { createStore, applyMiddleware, compose } from 'redux';
import Immutable, { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import reducers from './reducers';
import sagas from './../data/sagas';

const sagaMiddleware = createSagaMiddleware();

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
};

// react-redux-firebase options
const firebaseOptions = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
};

const configureStore = (initialState = Immutable.Map(), history) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history), thunk.withExtraArgument(getFirebase)];

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
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
