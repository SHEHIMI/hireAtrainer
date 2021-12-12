import { DELETE_USERS_SUCCESS } from "../actions/action";

const defaultState = {
  status: false,
  Email: "",
};

const deleteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_USERS_SUCCESS:
      return Object.assign({}, state, {
        status: true,
        Email: action.payload.data,
      });
    default:
      return state;
  }
};

export default deleteReducer;
