import { DELETE_USERS_SUCCESS, DELETE_USERS_ERROR } from "../actions/action";

const defaultState = {
  status: false,
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_USERS_SUCCESS:
      return Object.assign({}, state, { status: true });
    case DELETE_USERS_ERROR:
      return Object.assign({}, state, { status: false });
    default:
      return state;
  }
};

export default counterReducer;
