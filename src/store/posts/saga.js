import { put, call, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../constants/api";
import { TYPES } from "../action-types";
import {
  getPostsRequestSuccess,
  getPostsRequestError,
  getPostRequestSuccess,
  getPostRequestError,
} from "./actions";

function* getPostsWorker() {
  try {
    console.log("SAGA POSTS");
    const { data } = yield call(axios.get, api.posts);
    console.log("data: ", data);
    yield put(getPostsRequestSuccess(data));
  } catch (error) {
    yield put(getPostsRequestError(error.message));
  }
}

function* getPostWorker({ id }) {
  try {
    const { data } = yield call(axios.get, `${api.posts}?id=${id}`);
    yield put(getPostRequestSuccess(data));
  } catch (error) {
    yield put(getPostRequestError(error.message));
  }
}

export default function* postsWatcher() {
  yield takeLatest(TYPES.GET_POSTS_REQUEST, getPostsWorker);
  yield takeLatest(TYPES.GET_POST_REQUEST, getPostWorker);
}
