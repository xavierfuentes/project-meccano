import signinSaga from './Signin/sagas';
import signupSaga from './Signup/sagas';

export default function* userManagerSaga() {
  yield [signupSaga(), signinSaga()];
}
