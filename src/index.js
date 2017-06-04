import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './data/store';
import Root from './components/Root';

const initialState = Immutable.Map();
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root')
);
