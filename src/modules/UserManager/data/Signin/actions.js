import * as types from './types';

export const localSigninRequest = values => ({
  type: types.SIGNIN_REQUESTING,
  payload: {
    email: values.get('email'),
    password: values.get('password'),
  },
});

export const socialSigninRequest = providerId => ({
  type: types.SIGNIN_REQUESTING,
  payload: {
    providerId,
  },
});

export const signinRequestSucceeded = response => ({
  type: types.SIGNIN_SUCCESS,
  payload: { response },
});

export const signinRequestFailed = error => ({
  type: types.SIGNIN_ERROR,
  payload: { error },
});
