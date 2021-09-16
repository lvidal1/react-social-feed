import { combineReducers } from "redux";

import { postReducer } from "./posts.reducer";
import { userReducer } from "./users.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer
});

export default rootReducer;
