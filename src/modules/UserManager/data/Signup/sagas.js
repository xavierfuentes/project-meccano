import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './types';

const signupUrl = `${process.env.REACT_APP_AUTH_API_URI}/${process.env.REACT_APP_AUTH_API_VERSION}/signup`;

/**
 *
 * @param {*} email
 * @param {*} password
 * @return {*}
 */
function signupApi(email, password) {
  return (
    fetch(signupUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      // .then(handleApiErrors) // we'll make this in a second
      .then(response => response.json())
      .then(json => json)
      .catch(error => {
        throw error;
      })
  );
}

/**
 *
 * @param {*} action
 */
function* signupFlow(action) {
  try {
    const { email, password } = action;
    const response = yield call(signupApi, email, password);

    yield put({ type: types.SIGNUP_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.SIGNUP_ERROR, error });
  }
}

/**
 *
 */
function* signupWatcher() {
  yield takeLatest(types.SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;
