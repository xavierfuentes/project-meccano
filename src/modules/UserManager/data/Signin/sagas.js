// import * as firebase from 'firebase';
import { call, fork, put, take } from 'redux-saga/effects';

import * as types from './types';
import * as actions from './actions';

function signIn(formData) {
  // todo: call firebase
  console.log('authenticating...', formData);
}

function* handleRequestSignin() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(types.SIGNIN_REQUEST);
    const { authData, error } = yield call(signIn(payload.formData));

    if (authData && !error) {
      yield put(actions.signinRequestSucceeded(authData));
    } else {
      yield put(actions.signinRequestFailed(error));
    }
  }
}

export default function* SigninSaga() {
  yield fork(handleRequestSignin);
}
