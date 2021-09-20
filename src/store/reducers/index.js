import { combineReducers } from "redux";

import { userReducer } from "./user";
import { postReducer } from "./post";
import { commentReducer } from "./comment";
import { authReducer } from "./auth";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  posts: postReducer,
  comments: commentReducer,
  ui: uiReducer,
});

export default rootReducer;
