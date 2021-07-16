import { TYPES } from "../action-types";

export const getUsersRequest = () => ({
  type: TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: TYPES.GET_USERS_SUCCESS,
  users,
});

export const getUsersError = (error) => ({
  type: TYPES.GET_USERS_ERROR,
  error,
});
