import { call, put, takeLatest, delay } from "redux-saga/effects";
import { TYPES } from "../action-types";
import { cleverAxios } from "../../utils/axios";

function* getTableData() {
  try {
    const { data } = yield call(
      cleverAxios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: TYPES.GET_TABLE_DATA_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({
      type: TYPES.GET_TABLE_DATA_REQUEST_ERROR,
      message: error.message,
    });
  }
}

export function* mySaga() {
  yield takeLatest(TYPES.GET_TABLE_DATA_REQUEST, getTableData);
}
