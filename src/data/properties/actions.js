import { CREATE_PROPERTY_REQUEST, CREATE_PROPERTY_SUCCESS, CREATE_PROPERTY_FAILURE } from './types';

export const addPropertyRequest = () => ({
  type: CREATE_PROPERTY_REQUEST,
});

export const addPropertySuccess = property => ({
  type: CREATE_PROPERTY_SUCCESS,
  payload: { property },
});

export const addPropertyFailure = error => ({
  type: CREATE_PROPERTY_FAILURE,
  payload: { ...error },
});

export const createProperty = () => dispatch => {
  dispatch(addPropertyRequest());
};
