import { combineReducers } from "redux";

import { posts } from "./posts.reducer";
import { users } from "./users.reducer";

const rootReducer = combineReducers({
  posts,
  users
});

export default rootReducer;
