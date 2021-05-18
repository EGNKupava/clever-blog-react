import { combineReducers } from "redux";

import { postsReducer } from "./posts";
import { currentPostReducer } from "./currentPost";

export const createRootReducer = () =>
  combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
  });
