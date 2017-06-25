import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './types';

const initialState = {
  credential: null,
  requesting: false,
  user: null,
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SIGNIN_REQUEST: {
      return { ...state, requesting: true };
    }

    case SIGNIN_SUCCESS: {
      return { ...state, requesting: false, user: payload.user, credential: payload.credential };
    }

    case SIGNIN_FAILURE: {
      return { ...state, requesting: false, error: payload.error };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
