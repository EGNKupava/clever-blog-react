import { call, put, takeLatest, delay } from "redux-saga/effects";
import { TYPES } from "../action-types";
import { cleverAxios } from "../../utils/axios";

import {
  getTableDataRequestSuccess,
  getTableDataRequestError,
} from "./action-creators";

function* getTableData() {
  try {
    const { data } = yield call(
      cleverAxios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(getTableDataRequestSuccess(data));
  } catch (error) {
    yield put(getTableDataRequestError(error));
  }
}

export function* mySaga() {
  yield takeLatest(TYPES.GET_TABLE_DATA_REQUEST, getTableData);
}
