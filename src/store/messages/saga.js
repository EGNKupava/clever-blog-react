import { call, put, takeLatest, delay, fork, select } from "redux-saga/effects";
import axios from "axios";
import { TYPES } from "../action-types";
import { api } from "../../constants/api";
function* getMessagesWorker() {
  try {
    const {
      data: { messages, totalResults },
    } = yield call(axios.get, api.getMessages);
    yield delay(2000);
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
  const { userName } = yield select((state) => state.user);
  const body = {
    text: message,
    user: userName,
  };
  try {
    const { data } = yield call(axios.post, api.newMessage, body);
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

function* deleteMessageWorker({ id }) {
  try {
    const { data } = yield call(axios.delete, api.deleteMessage, {
      params: { id },
    });
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

function* editMessageWorker({ id, text }) {
  try {
    const { data } = yield call(axios.put, api.updateMessage, { id, text });
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
function* updateMessageLikesWorker({ id, likes }) {
  try {
    const { data } = yield call(axios.put, api.updateMessage, {
      id,
      likes,
    });
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
  yield takeLatest(TYPES.DELETE_MESSAGE_REQUEST, deleteMessageWorker);
  yield takeLatest(TYPES.EDIT_MESSAGE_REQUEST, editMessageWorker);
  yield takeLatest(
    TYPES.UPADATE_MESSAGE_LIKES_REQUEST,
    updateMessageLikesWorker
  );
}
