import * as types from './types';

export const signupRequest = values => ({
  type: types.SIGNUP_REQUESTING,
  payload: {
    email: values.get('email'),
    password: values.get('password'),
  },
});

export const signupRequestSucceeded = response => ({
  type: types.SIGNUP_SUCCESS,
  payload: { response },
});

export const signupRequestFailed = error => ({
  type: types.SIGNUP_ERROR,
  payload: { error },
});
