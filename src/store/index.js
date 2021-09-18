import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const loggerMiddleware = createLogger();

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(loggerMiddleware)
  )
);

/**
 * Defines the data to be stored on the localstorage
 */
store.subscribe(() => {
  saveState({
    comments: store.getState().comments,
    posts: { commentIdsById: store.getState().posts.commentIdsById }
  });
});

