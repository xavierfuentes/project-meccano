import { fromJS } from 'immutable';

const initialState = fromJS({});

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;
