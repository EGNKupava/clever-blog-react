import { put, call, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../constants/api";
import { TYPES } from "../action-types";
import { getPostsRequestSuccess, getPostsRequestError } from "./actions";

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

export default function* postsWatcher() {
  yield takeLatest(TYPES.GET_POSTS_REQUEST, getPostsWorker);
}
