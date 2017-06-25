import { actions as routerActions } from 'redux-router5';

import { DASHBOARD_ROUTE } from '../routes';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './types';
import { asyncRequestStarted, asyncRequestFinished } from '../ui/actions';
import { PROVIDER_ID_GOOGLE, signinWithGoogle, signinWithEmailAndPassword } from '../../helpers/firebase';

export const signinRequest = () => ({
  type: SIGNIN_REQUEST,
});

export const signinSuccess = ({ credential, user }) => ({
  type: SIGNIN_SUCCESS,
  payload: { credential, user },
});

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  payload: { ...error },
});

export const signin = ({ username, password, provider }) => dispatch => {
  dispatch(asyncRequestStarted());
  dispatch(signinRequest());

  // validate 'data' and dispatch any action needed

  switch (provider) {
    case PROVIDER_ID_GOOGLE:
      signinWithGoogle(provider)
        .then(result => {
          // todo: maybe map the user before setting it in the state?
          dispatch(signinSuccess(result));
          // localStorage.setItem('userToken', result.credential.data.token);
          dispatch(routerActions.navigateTo(DASHBOARD_ROUTE.name));
          dispatch(asyncRequestFinished());
        })
        .catch(error => {
          dispatch(signinFailure(error));
          dispatch(asyncRequestFinished());
        });
      break;

    default:
      // no provider
      signinWithEmailAndPassword(username, password);
      dispatch(asyncRequestFinished());
      break;
  }
};
