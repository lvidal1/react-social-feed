import { combineReducers } from "redux";

import { userReducer } from "./user";
import { postReducer } from "./posts.reducer";
import { commentReducer } from "./comments.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer
});

export default rootReducer;
