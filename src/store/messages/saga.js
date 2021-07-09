import { call, put, takeLatest, delay, fork } from "redux-saga/effects";
import axios from "axios";
import { TYPES } from "../action-types";

function* getMessagesWorker() {
  try {
    const {
      data: { messages, totalResults },
    } = yield call(
      axios.get,
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/chat/incoming_webhook/getMessages"
    );
    yield delay(2000);
    // throw new Error("ХЕРНЯ");
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_SUCCESS,
      messages,
      totalResults,
    });
  } catch (error) {
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_ERROR,
    });
  }
}

function* sendMessageWorker({ message }) {
  const body = {
    text: message,
    user: "Cleverland",
  };
  try {
    const { data } = yield call(
      axios.post,
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/cleverlandblog-cuual/service/chat/incoming_webhook/newMessage",
      body
    );
    yield fork(getMessagesWorker);
    // yield put({
    //   type: TYPES.GET_MESSAGES_REQUEST_SUCCESS,
    //   messages,
    //   totalResults,
    // });
  } catch (error) {
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_ERROR,
    });
  }
}

export function* messagesWatcher() {
  yield takeLatest(TYPES.GET_MESSAGES_REQUEST, getMessagesWorker);
  yield takeLatest(TYPES.SEND_MESSAGE_REQUEST, sendMessageWorker);
}
