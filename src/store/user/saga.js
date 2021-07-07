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

function* loginWorker() {
  try {
    console.log("SAGA POSTS");
    const { data } = yield call(axios.get, api.posts);
    console.log("data: ", data);
    yield put(getPostsRequestSuccess(data));
  } catch (error) {
    yield put(getPostsRequestError(error.message));
  }
}

// function* logOutPostWorker({ postData }) {
//   console.log("postData: ", postData);
//   try {
//     const { data } = yield call(axios.post, api.newPost, postData);
//     console.log("data: ", data);
//     yield fork(getPostsWorker);
//     // yield put(newPostSuccess(data));
//   } catch (error) {
//     yield put(newPostError(error.message));
//   }
// }

export default function* userWatcher() {
  // yield takeLatest(TYPES.GET_POSTS_REQUEST, getPostsWorker);
}
