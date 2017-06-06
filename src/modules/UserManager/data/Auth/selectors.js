import { createSelector } from 'reselect';

import { userManagerStateSelector } from '../selectors';

export const authStateSelector = createSelector(userManagerStateSelector, state => state.get('auth'));

export const authenticatedUserSelector = createSelector(authStateSelector, state => state.get('user'));

export const isAuthenticatedSelector = createSelector(authStateSelector, state => state.get('successful'));
