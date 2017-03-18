import * as types from './types';

export const setUser = token => ({
  type: types.USER_SET,
  payload: { token },
});

export const unsetUser = () => ({
  type: types.USER_UNSET,
});
