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
      return {
        ...state,
        requesting: true,
        messages: [{ body: 'Signing up...', time: new Date() }],
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        messages: [
          {
            body: `Successfully created account for ${payload.response.email}`,
            time: new Date(),
          },
        ],
        requesting: false,
        successful: true,
      };

    case types.SIGNUP_ERROR:
      return {
        ...state,
        errors: state.errors.concat([
          {
            body: payload.error.toString(),
            time: new Date(),
          },
        ]),
        requesting: false,
        successful: false,
      };

    default:
      return state;
  }
};

export default reducer;
