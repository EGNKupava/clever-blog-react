import { combineReducers } from "redux";

import { postsReducer } from "./posts";
import { currentPostReducer } from "./currentPost";
import { userReducer } from "./user";
import { messagesReducer } from "./messages";

export const createRootReducer = () =>
  combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
    user: userReducer,
    messages: messagesReducer,
  });
