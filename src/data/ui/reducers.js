import { SHOW_MODAL, CLOSE_MODAL } from '../ui/types';

const initialState = {
  modal: null,
};

const uiReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHOW_MODAL:
      return { ...state, modal: payload.modal };

    case CLOSE_MODAL:
      return { ...state, modal: null };

    default:
      return state;
  }
};

export default uiReducer;
