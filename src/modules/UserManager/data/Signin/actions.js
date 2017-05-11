import * as types from './types';

export const signinRequest = formData => ({
  type: types.SIGNIN_REQUEST,
  payload: { formData },
});

export const signinRequestSucceeded = authData => ({
  type: types.SIGNIN_SUCCESS,
  payload: { authData },
});

export const signinRequestFailed = error => ({
  type: types.SIGNIN_ERROR,
  payload: { error },
});
