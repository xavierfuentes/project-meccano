import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_SIGNUP_URL } from './constants';
import * as types from './types';
import * as actions from './actions';

function signupApi({ email, password }) {
  return axios.post(API_SIGNUP_URL, { email, password }).then(response => response.data).catch(error => {
    // todo: error handler
    throw error;
  });
}

function* signupSaga({ payload }) {
  try {
    const response = yield call(signupApi, payload);

    yield put(actions.signupRequestSucceeded(response));
  } catch (error) {
    yield put(actions.signupRequestFailed(error));
  }
}

function* signupWatcher() {
  yield takeLatest(types.SIGNUP_REQUESTING, signupSaga);
}

export default signupWatcher;
