import { createSelector } from 'reselect';

import { userManagerStateSelector } from '../selectors';

export const authStateSelector = createSelector(userManagerStateSelector, state => state.get('auth'));

export const authenticatedUserSelector = createSelector(authStateSelector, state => state.get('user'));

export const userAuthenticatedSelector = createSelector(authenticatedUserSelector, user => user && !!user.get('id'));
