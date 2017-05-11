import { fork } from 'redux-saga/effects';

import SigninSaga from './Signin/sagas';

export default function* userManagerSaga() {
  yield fork(SigninSaga);
}
