import { call, fork, put, take } from 'redux-saga/effects';

import {
  createUserWithEmailAndPassword,
  signinWithEmailAndPassword,
  signinWithGoogle,
  signout,
} from '../../../../helpers/firebase';

import * as types from './types';
import * as actions from './actions';

function signin(formData) {
  const provider = Object.prototype.hasOwnProperty.call(formData, 'provider') && formData.provider;

  if (provider) {
    switch (formData.provider) {
      case 'google':
        return signinWithGoogle();
      default:
        throw new Error(`The provider ${provider} is incorrect`);
    }
  }

  const { email, password } = formData.toJS();
  return signinWithEmailAndPassword(email, password).then(user => ({ user })).catch(error => ({ error }));
}

function signup(formData) {
  const { email, password } = formData.toJS();
  return createUserWithEmailAndPassword(email, password).then(user => ({ user })).catch(error => ({ error }));
}

function* handleRequestSignin() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(types.SIGNIN_REQUEST);
    const { user, error } = yield call(signin, payload.formData);

    if (user && !error) {
      yield put(actions.signinRequestSucceeded(user));
    } else {
      yield put(actions.signinRequestFailed(error));
    }
  }
}

function* handleRequestSignout() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(types.SIGNOUT_REQUEST);
    yield call(signout);
    yield put(actions.signoutRequestSucceeded());
  }
}

function* handleRequestSignup() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(types.SIGNUP_REQUEST);
    const { user, error } = yield call(signup, payload.formData);

    if (user && !error) {
      yield put(actions.signupRequestSucceeded(user));
    } else {
      yield put(actions.signupRequestFailed(error));
    }
  }
}

export default function* AuthSaga() {
  yield fork(handleRequestSignin);
  yield fork(handleRequestSignout);
  yield fork(handleRequestSignup);
}
