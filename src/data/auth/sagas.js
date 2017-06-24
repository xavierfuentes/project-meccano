import { all, call, fork, put, race, take } from 'redux-saga/effects';

import { SIGNIN_REQUEST, SIGNOUT_REQUEST } from '../auth/types';
import { signinSuccess, signinFailure } from '../auth/actions';
import { PROVIDER_ID_GOOGLE, signinWithGoogle, signinWithEmailAndPassword } from '../../helpers/firebase';

export function* authorize({ username, password, provider }) {
  // When started dispatch any necessary action
  // yield put({ type: SENDING_REQUEST, sending: true });

  try {
    switch (provider) {
      case PROVIDER_ID_GOOGLE:
        return yield call(signinWithGoogle, provider);
      default:
        // no provider
        return yield call(signinWithEmailAndPassword, username, password);
    }
  } catch (error) {
    yield put(signinFailure(error));

    return false;
  } finally {
    // When done dispatch any necessary action
    // yield put({ type: SENDING_REQUEST, sending: false });
  }
}

export function* loginFlow() {
  // eslint-disable-next-line
  while (true) {
    const { payload } = yield take(SIGNIN_REQUEST);
    const winner = yield race({
      auth: call(authorize, payload),
      logout: take(SIGNOUT_REQUEST),
    });

    if (winner.auth) {
      yield put(signinSuccess(winner.auth));
      // any other side effects
    }
  }
}

export default all([fork(loginFlow)]);
