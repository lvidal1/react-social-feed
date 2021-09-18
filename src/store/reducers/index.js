import { combineReducers } from "redux";

import { userReducer } from "./user";
import { postReducer } from "./post";
import { commentReducer } from "./comment";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer
});

export default rootReducer;
