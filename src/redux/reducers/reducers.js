import { combineReducers } from "redux";
import deleteReducer from "./deleteReducer";

const allReducers = combineReducers({
  delete: deleteReducer,
});

export default allReducers;
