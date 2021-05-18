import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../constants/api";
import { TYPES } from "../action-types";
import { getPostRequestSuccess, getPostRequestError } from "./actions";

function* getPostWorker({ id }) {
  try {
    const { data } = yield call(axios.get, `${api.posts}?id=${id}`);
    yield put(getPostRequestSuccess(data));
  } catch (error) {
    yield put(getPostRequestError(error.message));
  }
}

export default function* currentPostWatcher() {
  yield takeLatest(TYPES.GET_POST_REQUEST, getPostWorker);
}
