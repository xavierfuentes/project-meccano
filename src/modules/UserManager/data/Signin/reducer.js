import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGNIN_REQUESTING: {
      const message = fromJS({
        body: 'Signing in...',
        time: new Date(),
      });
      return state.set('requesting', true).set('messages', state.get('messages').push(message));
    }

    case types.SIGNIN_SUCCESS: {
      const message = fromJS({
        body: `Successfully created account for ${payload.response.user.email}`,
        time: new Date(),
      });
      return state
        .set('requesting', false)
        .set('successful', true)
        .set('messages', state.get('messages').push(message));
    }

    case types.SIGNIN_ERROR: {
      const error = {
        body: payload.error.toString(),
        time: new Date(),
      };
      return state.set('requesting', false).set('successful', false).set('errors', state.get('errors').push(error));
    }

    default: {
      return state;
    }
  }
};

export default reducer;
