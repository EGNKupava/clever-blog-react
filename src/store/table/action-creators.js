import { TYPES } from "../action-types";

export const getTableDataRequestSuccess = (data) => ({
  type: TYPES.GET_TABLE_DATA_REQUEST_SUCCESS,
  data,
});

export const getTableDataRequestError = (error) => ({
  type: TYPES.GET_TABLE_DATA_REQUEST_ERROR,
  message: error.message,
});
