import userManagerSaga from '../modules/UserManager/data/sagas';

export default function* IndexSaga() {
  yield [userManagerSaga()];
}
