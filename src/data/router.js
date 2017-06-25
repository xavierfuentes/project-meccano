import createRouter from 'router5';
// import loggerPlugin from 'router5/plugins/logger';
import browserPlugin from 'router5/plugins/browser';

import ROUTES, { SIGNIN_ROUTE } from './routes';

export default function configureRouter() {
  const router = createRouter(ROUTES, {
    // allowNotFound: true,
    defaultRoute: SIGNIN_ROUTE.name,
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
