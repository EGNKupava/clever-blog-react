import { combineReducers } from "redux";

import { postsReducer } from "./posts";

export const createRootReducer = () =>
  combineReducers({
    posts: postsReducer,
  });
