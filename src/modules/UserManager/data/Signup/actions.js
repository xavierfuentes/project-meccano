import * as types from './types';

export const signupRequestSucceeded = authData => ({
  type: types.SIGNUP_SUCCESS,
  payload: { authData },
});

export const signupRequestFailed = error => ({
  type: types.SIGNUP_ERROR,
  payload: { error },
});

export const signup = () => {};
