import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
  requesting: false,
  successful: false,
});

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return state.set('requesting', true);
    }

    case types.SIGNUP_SUCCESS: {
      return state.set('requesting', false).set('successful', true);
    }

    case types.SIGNUP_ERROR: {
      return state.set('requesting', false).set('successful', false);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
