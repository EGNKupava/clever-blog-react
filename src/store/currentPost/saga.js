import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../constants/api";
import { TYPES } from "../action-types";
import { getPostRequestSuccess, getPostRequestError } from "./actions";

function* getPostWorker({ id }) {
  try {
    const {
      data: { posts },
    } = yield call(axios.get, `${api.posts}?id=${id}`);
    if (posts.length) {
      yield put(getPostRequestSuccess(posts[0]));
    } else {
      throw new Error("Ниче не найдено");
    }
  } catch (error) {
    yield put(getPostRequestError(error.message));
  }
}

export default function* currentPostWatcher() {
  yield takeLatest(TYPES.GET_POST_REQUEST, getPostWorker);
}
