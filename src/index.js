import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './helpers/history';

import configureStore from './data/store';
import Root from './components/Root';

const initialState = Immutable.Map();
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root')
);
