export const SIGNIN_ROUTE = { name: 'signin', path: '/signin' };
export const SIGNUP_ROUTE = { name: 'signup', path: '/signup' };
export const DASHBOARD_ROUTE = { name: 'dashboard', path: '/dashboard' };
export const PROPERTIES_ROUTE = { name: 'properties', path: '/properties' };
export const PROPERTIES_DETAIL_ROUTE = { name: 'properties.detail', path: '/properties:id' };

export default [
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  DASHBOARD_ROUTE,
  // { name: 'leads', path: '/leads' },
  // { name: 'leads.detail', path: '/leads:id' },
  // { name: 'people', path: '/people' },
  // { name: 'people.detail', path: '/people:id' },
  PROPERTIES_ROUTE,
  PROPERTIES_DETAIL_ROUTE,
  // { name: 'companies', path: '/companies' },
  // { name: 'companies.detail', path: '/companies:id' },
  // { name: 'opportunities', path: '/opportunities' },
  // { name: 'opportunities.detail', path: '/opportunities:id' },
  // { name: 'projects', path: '/projects' },
  // { name: 'projects.detail', path: '/projects:id' },
  // { name: 'settings', path: '/settings' },
  // { name: 'tasks', path: '/tasks' },
  // { name: 'tasks.detail', path: '/tasks/:id' },
  // { name: 'reports', path: '/reports' },
  // { name: 'reports.detail', path: '/reports:id' },
];
