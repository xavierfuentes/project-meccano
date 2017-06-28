import { createSelector } from 'reselect';

const authState = state => state.auth;

export const getCurrentUser = createSelector(authState, state => state.user);
export const isSignedin = createSelector(getCurrentUser, user => user && !!user.uid);
