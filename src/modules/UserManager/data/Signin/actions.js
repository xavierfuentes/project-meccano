import * as types from './types';

export const signinRequest = formData => ({
  type: types.SIGNIN_REQUEST,
  payload: { formData },
});

export const signinRequestSucceeded = user => ({
  type: types.SIGNIN_SUCCESS,
  payload: { user },
});

export const signinRequestFailed = error => ({
  type: types.SIGNIN_ERROR,
  payload: { error },
});
