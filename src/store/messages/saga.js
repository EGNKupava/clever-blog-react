import { call, put, takeLatest, fork, select } from "redux-saga/effects";
import { TYPES } from "../action-types";
import { api } from "../../constants/api";
import { cleverAxios } from "../../utils/axios";

function* getMessagesWorker() {
  try {
    const {
      data: { messages, totalResults },
    } = yield call(cleverAxios.get, api.getMessages);
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_SUCCESS,
      messages,
      totalResults,
    });
  } catch (error) {
    yield put({
      type: TYPES.GET_MESSAGES_REQUEST_ERROR,
      error,
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
    yield call(cleverAxios.post, api.newMessage, body);
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
    const { data } = yield call(cleverAxios.delete, api.deleteMessage, {
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
    const { data } = yield call(cleverAxios.put, api.updateMessage, {
      id,
      text,
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
function* updateMessageLikesWorker({ id, likes }) {
  try {
    const { data } = yield call(cleverAxios.put, api.updateMessage, {
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
