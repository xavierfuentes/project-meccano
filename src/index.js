import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'; // eslint-disable-line import/no-extraneous-dependencies
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './data/store';
import Root from './components/Root';

const initialState = Immutable.Map();
const store = configureStore(initialState);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root')
);
