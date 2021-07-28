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

export const addUserRequest = (values, onSuccess) => ({
  type: TYPES.ADD_USER_REQUEST,
  values,
  onSuccess,
});

export const addUserSuccess = (values) => ({
  type: TYPES.ADD_USER_SUCCESS,
  values,
});

export const addUserError = (error) => ({
  type: TYPES.ADD_USER_ERROR,
  error,
});
