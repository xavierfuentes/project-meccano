import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import createHistory from 'history/createBrowserHistory'; // eslint-disable-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './data/store';
import Root from './components/Root';

const initialState = Immutable.Map();
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
