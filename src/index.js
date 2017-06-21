import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './data/store';
import configureRouter from './data/router';

import Root from './containers/Root/Root';

const initialState = {};
const router = configureRouter();
const store = configureStore(router, initialState);

const wrappedApp = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </Provider>
);

router.start(() => {
  ReactDOM.render(wrappedApp, document.getElementById('root'));
});

registerServiceWorker();
