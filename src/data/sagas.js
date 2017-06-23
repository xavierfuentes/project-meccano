import { all, fork } from 'redux-saga/effects';

import authSagas from './auth/sagas';

export default function* sagas() {
  yield all([fork(authSagas)]);
}
