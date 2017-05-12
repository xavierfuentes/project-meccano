import * as types from './types';

export const signupRequest = formData => ({
  type: types.SIGNUP_REQUEST,
  payload: { formData },
});

export const signupRequestSucceeded = user => ({
  type: types.SIGNUP_SUCCESS,
  payload: { user },
});

export const signupRequestFailed = error => ({
  type: types.SIGNUP_ERROR,
  payload: { error },
});
