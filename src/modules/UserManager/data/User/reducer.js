import { fromJS } from 'immutable';

import * as types from './types';

const initialSate = fromJS({
  id: null,
  email: null,
  token: null,
});

export default (state = initialSate, { type, payload }) => {
  switch (type) {
    case types.USER_SET:
      return state.set('id', payload.user.id).set('email', payload.user.email).set('token', payload.token);

    case types.USER_UNSET:
      return state.set('id', null).set('email', null).set('token', null);

    default:
      return state;
  }
};
