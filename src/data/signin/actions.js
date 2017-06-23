import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './types';

export const signinRequest = data => ({
  type: SIGNIN_REQUEST,
  payload: { ...data },
});

export const signinSuccess = ({ credential, user }) => ({
  type: SIGNIN_SUCCESS,
  payload: { credential, user },
});

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  payload: { ...error },
});
