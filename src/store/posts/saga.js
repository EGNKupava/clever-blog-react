import { put, call, takeLatest, select, fork } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../constants/api";
import { TYPES } from "../action-types";
import {
  getPostsRequestSuccess,
  getPostsRequestError,
  newPostSuccess,
  newPostError,
} from "./actions";

function* getPostsWorker() {
  try {
    const { data } = yield call(axios.get, api.posts);
    yield put(getPostsRequestSuccess(data));
  } catch (error) {
    yield put(getPostsRequestError(error.message));
  }
}

function* newPostWorker({ postData }) {
  try {
    const { data } = yield call(axios.post, api.newPost, postData);
    yield fork(getPostsWorker);
    // yield put(newPostSuccess(data));
  } catch (error) {
    yield put(newPostError(error.message));
  }
}

export default function* postsWatcher() {
  yield takeLatest(TYPES.GET_POSTS_REQUEST, getPostsWorker);
  yield takeLatest(TYPES.NEW_POST_REQUEST, newPostWorker);
}
