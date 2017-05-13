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
  type: types.SIGNIN_FAILURE,
  payload: { error },
});

export const signupRequest = formData => ({
  type: types.SIGNUP_REQUEST,
  payload: { formData },
});

export const signupRequestSucceeded = user => ({
  type: types.SIGNUP_SUCCESS,
  payload: { user },
});

export const signupRequestFailed = error => ({
  type: types.SIGNUP_FAILURE,
  payload: { error },
});
