import { combineReducers } from "redux";

import { userReducer } from "./user";
import { postReducer } from "./post";
import { commentReducer } from "./comment";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  posts: postReducer,
  comments: commentReducer
});

export default rootReducer;
