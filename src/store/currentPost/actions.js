import { TYPES } from "../action-types";

export const getPostRequest = (id) => ({
  type: TYPES.GET_POST_REQUEST,
  id,
});

export const getPostRequestSuccess = (post) => ({
  type: TYPES.GET_POST_REQUEST_SUCCESS,
  post,
});

export const getPostRequestError = (error) => ({
  type: TYPES.GET_POST_REQUEST_SUCCESS,
  error,
});
