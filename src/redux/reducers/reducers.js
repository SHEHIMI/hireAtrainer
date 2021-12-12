import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  counter: counterReducer,
});

export default allReducers;
