import { all } from "redux-saga/effects";

import { mySaga } from "./table/saga";
import { messagesWatcher } from "./messages/saga";
import { usersWatcher } from "./users/saga";

export function* rootSaga() {
  yield all([mySaga(), messagesWatcher(), usersWatcher()]);
}
