import { all } from "redux-saga/effects";

import postsWatcher from "./posts/saga";

export default function* rootSaga() {
  yield all([postsWatcher()]);
}
