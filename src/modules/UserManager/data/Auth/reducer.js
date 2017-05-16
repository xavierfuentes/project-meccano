import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
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
      return state.set('requesting', false).set('successful', true).set('user', payload.user);
    }

    case types.SIGNIN_FAILURE: {
      return state.set('requesting', false).set('successful', false);
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
