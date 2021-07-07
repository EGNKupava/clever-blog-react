import { put, call, takeLatest, select, fork } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../constants/api";
import { TYPES } from "../action-types";
import {
  getMessagesRequestSuccess,
  getMessagesRequestError,
  newMessageRequestSuccess,
  newMessageRequestError,
} from "./actions";

function* getMessagesWorker() {
  try {
    const { data } = yield call(axios.get, api.messages);
    console.log("data: ", data);
    yield put(getMessagesRequestSuccess(data.messages, data.totalResults));
  } catch (error) {
    yield put(getMessagesRequestError(error.message));
  }
}

function* newMessageWorker({ message }) {
  console.log("postData: ", message);
  try {
    const { data } = yield call(axios.post, api.newMessage, {
      text: message,
      user: "EGN",
    });
    console.log("data: ", data);
    yield fork(getMessagesWorker);
    // yield put(newMessageRequestSuccess(data));
  } catch {
    yield put(newMessageRequestError());
  }
}

export default function* messagesWatcher() {
  yield takeLatest(TYPES.GET_MESSAGES_REQUEST, getMessagesWorker);
  yield takeLatest(TYPES.NEW_MESSAGE_REQUEST, newMessageWorker);
}
