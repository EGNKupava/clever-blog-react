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

export const addUserRequest = (values) => ({
  type: TYPES.ADD_USERS_REQUEST,
  values,
});

export const addUserSuccess = (values) => ({
  type: TYPES.ADD_USERS_SUCCESS,
  values,
});

export const addUserError = (error) => ({
  type: TYPES.ADD_USERS_ERROR,
  error,
});
