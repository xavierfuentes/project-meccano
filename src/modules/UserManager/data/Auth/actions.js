import * as types from './types';

export const signinRequest = formData => ({
  type: types.SIGNIN_REQUEST,
  payload: { formData },
});

export const signinRequestSucceeded = ({ credential, user }) => ({
  type: types.SIGNIN_SUCCESS,
  payload: { credential, user },
});

export const signinRequestFailed = error => ({
  type: types.SIGNIN_FAILURE,
  payload: { error },
});

export const signoutRequest = () => ({
  type: types.SIGNOUT_REQUEST,
});

export const signoutRequestSucceeded = result => ({
  type: types.SIGNOUT_SUCCESS,
  payload: { result },
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
