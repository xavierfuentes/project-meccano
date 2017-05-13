import { fork } from 'redux-saga/effects';

import AuthSaga from './Auth/sagas';

export default function* userManagerSaga() {
  yield fork(AuthSaga);
}
