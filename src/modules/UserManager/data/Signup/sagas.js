// import * as firebase from 'firebase';
import { call, fork, put, take } from 'redux-saga/effects';

import { createUserWithEmailAndPassword } from '../../../../helpers/firebase';

import * as types from './types';
import * as actions from './actions';

function signUp(formData) {
  const { email, password } = formData.toJS();
  return createUserWithEmailAndPassword(email, password).then(user => ({ user })).catch(error => ({ error }));
}

function* handleRequestSignup() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(types.SIGNUP_REQUEST);
    const { user, error } = yield call(signUp, payload.formData);

    if (user && !error) {
      yield put(actions.signupRequestSucceeded(user));
    } else {
      yield put(actions.signupRequestFailed(error));
    }
  }
}

export default function* SigninSaga() {
  yield fork(handleRequestSignup);
}
