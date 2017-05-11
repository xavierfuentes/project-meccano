import * as types from './types';

export const signupRequest = formData => ({
  type: types.SIGNUP_REQUEST,
  payload: { formData },
});

export const signupRequestSucceeded = authData => ({
  type: types.SIGNUP_SUCCESS,
  payload: { authData },
});

export const signupRequestFailed = error => ({
  type: types.SIGNUP_ERROR,
  payload: { error },
});
