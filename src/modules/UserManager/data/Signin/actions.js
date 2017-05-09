import * as types from './types';

export const signinRequestSucceeded = response => ({
  type: types.SIGNIN_SUCCESS,
  payload: { response },
});

export const signinRequestFailed = error => ({
  type: types.SIGNIN_ERROR,
  payload: { error },
});

export const signin = provider => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  firebase
    .login({
      provider,
    })
    .then(response => {
      dispatch(signinRequestSucceeded(response));
    })
    .catch(error => {
      dispatch(signinRequestFailed(error));
    });
};
