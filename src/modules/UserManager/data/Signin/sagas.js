// import * as firebase from 'firebase';
import { call, fork, put, take } from 'redux-saga/effects';

import { signInWithEmailAndPassword } from '../../../../helpers/firebase';

import * as types from './types';
import * as actions from './actions';

function signIn(formData) {
  const { email, password } = formData.toJS();

  return signInWithEmailAndPassword(email, password).then(user => ({ user })).catch(error => ({ error }));
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

export default function* SigninSaga() {
  yield fork(handleRequestSignin);
}
