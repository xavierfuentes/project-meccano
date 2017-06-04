import { createSelector } from 'reselect';

import { userManagerStateSelector } from '../selectors';

export const authStateSelector = createSelector(userManagerStateSelector, state => state.get('auth'));

export const authenticatedUserSelector = createSelector(
  authStateSelector,
  state => state.getIn(['user', 'id']) !== null
);

export const userIsAuthenticatedSelector = createSelector(authStateSelector, authState => authState.get('successful'));
