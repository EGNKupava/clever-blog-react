import { call, put, takeLatest, fork } from "redux-saga/effects";

import { cleverAxios } from "../../utils/axios";
import { TYPES } from "../action-types";
import { api } from "../../constants/api";
import {
  getUsersSuccess,
  getUsersError,
  addUserError,
  addUserSuccess,
  getUsersRequest,
} from "./action-creators";

function* getUsersWorker() {
  try {
    const {
      data: { users, totalUsers },
    } = yield call(cleverAxios.get, api.getUsers);
    yield put(getUsersSuccess(users, totalUsers));
  } catch (error) {
    yield put(getUsersError, error);
  }
}

function* addUserWorker({ values, onSuccess }) {
  try {
    const { data } = yield call(cleverAxios.post, api.addUser, values);
    console.log("data: ", data);
    onSuccess();
    yield put(addUserSuccess());
    // yield put(getUsersRequest());
    yield fork(getUsersWorker);
  } catch (error) {
    yield put(addUserError(error));
  }
}

export function* usersWatcher() {
  yield takeLatest(TYPES.GET_USERS_REQUEST, getUsersWorker);
  yield takeLatest(TYPES.ADD_USER_REQUEST, addUserWorker);
}
