import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
  credential: null,
  operationType: null,
  requesting: false,
  successful: false,
  user: null,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGNIN_REQUEST: {
      return state.set('requesting', true);
    }

    case types.SIGNIN_SUCCESS: {
      return state
        .set('credential', payload.credential)
        .set('operationType', payload.operationType)
        .set('requesting', false)
        .set('successful', true)
        .set('user', payload.user);
    }

    case types.SIGNIN_FAILURE: {
      return state.set('requesting', false).set('successful', false);
    }

    case types.SIGNOUT_REQUEST: {
      return state.set('requesting', true);
    }

    case types.SIGNOUT_SUCCESS: {
      return state
        .set('credential', null)
        .set('operationType', null)
        .set('requesting', false)
        .set('successful', false)
        .set('user', null);
    }

    case types.SIGNUP_REQUEST: {
      return state.set('requesting', true);
    }

    case types.SIGNUP_SUCCESS: {
      return state.set('requesting', false).set('successful', true);
    }

    case types.SIGNUP_FAILURE: {
      return state.set('requesting', false).set('successful', false);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
