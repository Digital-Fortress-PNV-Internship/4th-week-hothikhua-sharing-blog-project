import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import comment from "./comment"

export default combineReducers({
  auth,
  message,
  comment
});