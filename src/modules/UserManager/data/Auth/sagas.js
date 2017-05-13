import { call, fork, put, take } from 'redux-saga/effects';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../../../../helpers/firebase';

import * as types from './types';
import * as actions from './actions';

function signIn(formData) {
  const { email, password } = formData.toJS();
  return signInWithEmailAndPassword(email, password).then(user => ({ user })).catch(error => ({ error }));
}

function signUp(formData) {
  const { email, password } = formData.toJS();
  return createUserWithEmailAndPassword(email, password).then(user => ({ user })).catch(error => ({ error }));
}

function* handleRequestSignin() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(types.SIGNIN_REQUEST);
    const { user, error } = yield call(signIn, payload.formData);

    if (user && !error) {
      yield put(actions.signinRequestSucceeded(user));
    } else {
      yield put(actions.signinRequestFailed(error));
    }
  }
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

export default function* AuthSaga() {
  yield fork(handleRequestSignin);
  yield fork(handleRequestSignup);
}
