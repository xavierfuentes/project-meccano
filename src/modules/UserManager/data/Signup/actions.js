import * as types from './types';

export const signupRequest = ({ email, password }) => ({
  type: types.SIGNUP_REQUESTING,
  payload: { email, password },
});
