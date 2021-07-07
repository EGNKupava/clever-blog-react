import { all } from "redux-saga/effects";

import postsWatcher from "./posts/saga";
import currentPostWatcher from "./currentPost/saga";
import messagesWatcher from "./messages/saga";

export default function* rootSaga() {
  yield all([postsWatcher(), currentPostWatcher(), messagesWatcher()]);
}
