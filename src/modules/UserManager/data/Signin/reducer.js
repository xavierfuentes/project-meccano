import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
  requesting: false,
  successful: false,
});

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SIGNIN_REQUEST: {
      return state.set('requesting', true);
    }

    case types.SIGNIN_SUCCESS: {
      return state.set('requesting', false).set('successful', true);
    }

    case types.SIGNIN_ERROR: {
      return state.set('requesting', false).set('successful', false);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
