import { fromJS } from 'immutable';

import reducer from './reducer';
import * as actions from './actions';
// import * as types from './types';

describe('Auth reducer', () => {
  const initialState = fromJS({
    credential: null,
    requesting: false,
    successful: false,
    user: null,
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set requesting=true when a request starts', () => {
    const formData = {};
    expect(reducer(undefined, actions.signinRequest(formData)).toJS()).toHaveProperty('requesting', true);
    expect(reducer(undefined, actions.signupRequest(formData)).toJS()).toHaveProperty('requesting', true);
    expect(reducer(undefined, actions.signoutRequest()).toJS()).toHaveProperty('requesting', true);
  });

  it('should handle SIGNIN_SUCCESS', () => {
    const credential = null;
    const user = { email: 'xavi@fuent.es' };
    expect(reducer(initialState, actions.signinRequestSucceeded({ credential, user }))).toEqual(
      fromJS({
        credential: null,
        requesting: false,
        successful: true,
        user: {
          email: 'xavi@fuent.es',
        },
      })
    );
  });

  it('should handle SIGNIN_FAILURE', () => {
    const error = {};
    expect(reducer(initialState, actions.signinRequestFailed(error))).toEqual(
      fromJS({
        credential: null,
        requesting: false,
        successful: false,
        user: null,
      })
    );
  });

  it('should handle SIGNUP_SUCCESS', () => {});

  it('should handle SIGNUP_FAILURE', () => {});

  it('should handle SIGNOUT_SUCCESS', () => {});
});
