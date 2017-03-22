import * as types from './types';

export const setUser = response => ({
  type: types.USER_SET,
  payload: {
    user: response.user,
    token: response.token,
  },
});

export const unsetUser = () => ({
  type: types.USER_UNSET,
});
