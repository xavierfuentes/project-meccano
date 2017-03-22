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
    case types.SIGNUP_REQUESTING:
      return state.set('requesting', true).set(
        'messages',
        fromJS([
          {
            body: 'Signing up...',
            time: new Date(),
          },
        ])
      );

    case types.SIGNUP_SUCCESS:
      return state.set('requesting', false).set('successful', true).set(
        'messages',
        fromJS({
          body: `Successfully created account for ${payload.response.user.email}`,
          time: new Date(),
        })
      );

    case types.SIGNUP_ERROR:
      return state.set('requesting', false).set('successful', false).set(
        'errors',
        state.get('errors').push({
          body: payload.error.toString(),
          time: new Date(),
        })
      );

    default:
      return state;
  }
};

export default reducer;
