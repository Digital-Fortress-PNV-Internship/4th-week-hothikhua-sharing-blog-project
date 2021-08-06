import { combineReducers } from "redux";
import Message from "./message";
import Comment from "./comment"
import Khua from "./auth";

export default combineReducers({
  auth:Khua,
  message: Message,
  comment: Comment
});