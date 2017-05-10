import { fork } from 'redux-saga/effects';

import userManagerSaga from '../modules/UserManager/data/sagas';

export default function* IndexSaga() {
  yield fork(userManagerSaga);
}
