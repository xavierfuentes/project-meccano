import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import history from './helpers/history';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './data/store';

import Root from './components/Root/Root';

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
registerServiceWorker();
