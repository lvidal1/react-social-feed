import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(loggerMiddleware)
  )
);
