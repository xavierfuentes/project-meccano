import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import browserPlugin from 'router5/plugins/browser';

const routes = [
  { name: 'dashboard', path: '/dashboard' },
  // { name: 'leads', path: '/leads' },
  // { name: 'leads.detail', path: '/leads:id' },
  // { name: 'people', path: '/people' },
  // { name: 'people.detail', path: '/people:id' },
  { name: 'properties', path: '/properties' },
  { name: 'properties.detail', path: '/properties:id' },
  // { name: 'companies', path: '/companies' },
  // { name: 'companies.detail', path: '/companies:id' },
  // { name: 'opportunities', path: '/opportunities' },
  // { name: 'opportunities.detail', path: '/opportunities:id' },
  // { name: 'projects', path: '/projects' },
  // { name: 'projects.detail', path: '/projects:id' },
  { name: 'settings', path: '/settings' },
  // { name: 'tasks', path: '/tasks' },
  // { name: 'tasks.detail', path: '/tasks/:id' },
  // { name: 'reports', path: '/reports' },
  // { name: 'reports.detail', path: '/reports:id' },
];

export default function configureRouter() {
  const router = createRouter(routes, {
    // allowNotFound: true,
    defaultRoute: 'dashboard',
    trailingSlash: true,
  })
    .usePlugin(loggerPlugin)
    .usePlugin(
      browserPlugin({
        useHash: false,
      })
    );

  return router;
}
