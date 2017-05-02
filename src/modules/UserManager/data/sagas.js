import signinSaga from './Signin/sagas';

export default function* userManagerSaga() {
  yield [signinSaga()];
}
