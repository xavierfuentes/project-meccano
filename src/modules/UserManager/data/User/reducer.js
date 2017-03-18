import { fromJS } from 'immutable';

import * as types from './types';

const initialSate = fromJS({
  id: null,
  token: null,
});

export default (state = initialSate, { type, payload }) => {
  switch (type) {
    case types.USER_SET:
      return {
        ...state,
        id: payload.token.userId,
        token: payload.token,
      };

    case types.USER_UNSET:
      return {
        ...state,
        id: null,
        token: null,
      };

    default:
      return state;
  }
};
