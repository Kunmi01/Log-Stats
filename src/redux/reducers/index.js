import UPDATE_LOGS from '../actions/action-types';

const initialState = {
  logs: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGS:
      return {
        ...state,
        logs: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
