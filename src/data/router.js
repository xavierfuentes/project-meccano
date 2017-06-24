import createRouter from 'router5';
// import loggerPlugin from 'router5/plugins/logger';
import browserPlugin from 'router5/plugins/browser';

import ROUTES from './routes';

export default function configureRouter() {
  const router = createRouter(ROUTES, {
    // allowNotFound: true,
    defaultRoute: 'dashboard',
    trailingSlash: true,
  })
    // .usePlugin(loggerPlugin)
    .usePlugin(
      browserPlugin({
        useHash: false,
      })
    );

  return router;
}
