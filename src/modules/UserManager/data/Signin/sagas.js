import axios from 'axios';
import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';

import { API_LOCAL_SIGNIN_URL } from './constants';
import * as types from './types';
import * as actions from './actions';
import * as userActions from '../User/actions';
import * as userTypes from '../User/types';

function apiResponseHandler(response) {
  return response.data;
}

function apiErrorHandler(error) {
  throw error;
}

function signinApi(data) {
  if (data.providerId) {
    return axios.get(`${API_LOCAL_SIGNIN_URL}/${data.providerId}`).then(apiResponseHandler).catch(apiErrorHandler);
  }

  return axios.post(API_LOCAL_SIGNIN_URL, data).then(apiResponseHandler).catch(apiErrorHandler);
}

function* signout() {
  yield put(userActions.unsetUser());

  // remove our token
  localStorage.removeItem('token');

  // browserHistory.push('/login')
}

function* signinFlow(data) {
  let response;

  try {
    response = yield call(signinApi, data);

    yield put(userActions.setUser(response));
    yield put({ type: actions.SIGNIN_SUCCESS });

    localStorage.setItem('token', JSON.stringify(response));

    // browserHistory.push('/widgets')
  } catch (error) {
    yield put({ type: actions.SIGNIN_ERROR, error });
  } finally {
    // if the forked task was cancelled...
    if (yield cancelled()) {
      // browserHistory.push('/signin')
    }
  }

  return response;
}

function* signinWatcher() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(types.SIGNIN_REQUESTING);
    const task = yield fork(signinFlow, payload);
    const action = yield take([userTypes.USER_UNSET, types.SIGNIN_ERROR]);

    // if the logout action gets triggered before "task" has finished we cancel it
    if (action.type === userTypes.USER_UNSET) yield cancel(task);

    yield call(signout);
  }
}

export default signinWatcher;
