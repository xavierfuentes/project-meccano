import { CREATE_PROPERTY_REQUEST, CREATE_PROPERTY_SUCCESS, CREATE_PROPERTY_FAILURE } from './types';

const initialState = {
  list: [],
  requesting: false,
  error: null,
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CREATE_PROPERTY_REQUEST: {
      return { ...state, requesting: true };
    }

    case CREATE_PROPERTY_SUCCESS: {
      return { ...state, requesting: false, list: state.list.concat(payload.property) };
    }

    case CREATE_PROPERTY_FAILURE: {
      return { ...state, requesting: false, error: payload.error };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
