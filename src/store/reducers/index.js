import { combineReducers } from "redux";

import { postReducer } from "./posts.reducer";
import { userReducer } from "./users.reducer";
import { commentReducer } from "./comments.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer
});

export default rootReducer;
