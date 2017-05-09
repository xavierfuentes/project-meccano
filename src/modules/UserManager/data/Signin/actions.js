import * as types from './types';

export const signinRequestSucceeded = authData => ({
  type: types.SIGNIN_SUCCESS,
  payload: { authData },
});

export const signinRequestFailed = error => ({
  type: types.SIGNIN_ERROR,
  payload: { error },
});

export const signin = signinData => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  firebase
    .login(signinData.toJS())
    .then(authData => {
      dispatch(signinRequestSucceeded(authData));
    })
    .catch(error => {
      dispatch(signinRequestFailed(error));
    });
};
