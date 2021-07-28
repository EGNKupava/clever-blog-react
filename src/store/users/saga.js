import { call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import { TYPES } from "../action-types";
import { api } from "../../constants/api";
import {
  getUsersSuccess,
  getUsersError,
  addUserError,
  addUserSuccess,
} from "./action-creators";
function* getUsersWorker() {
  try {
    const {
      data: { users, totalUsers },
    } = yield call(axios.get, api.getUsers);
    yield put(getUsersSuccess(users, totalUsers));
  } catch (error) {
    yield put(getUsersError, error);
  }
}
function* addUserWorker({ values, onSuccess }) {
  try {
    const { data } = yield call(axios.post, api.addUser, values);
    console.log("data: ", data);
    onSuccess();
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserError(error));
  }
}

export function* usersWatcher() {
  yield takeLatest(TYPES.GET_USERS_REQUEST, getUsersWorker);
  yield takeLatest(TYPES.ADD_USER_REQUEST, addUserWorker);
}
