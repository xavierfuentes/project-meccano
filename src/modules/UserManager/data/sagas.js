import { fork } from 'redux-saga/effects';

import SigninSaga from './Signin/sagas';
import SignupSaga from './Signup/sagas';

export default function* userManagerSaga() {
  yield fork(SigninSaga);
  yield fork(SignupSaga);
}
