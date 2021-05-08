import { TYPES } from "../action-types";

export const getPostsRequest = () => ({
  type: TYPES.GET_POSTS_REQUEST,
});

export const getPostsRequestSuccess = (posts) => ({
  type: TYPES.GET_POSTS_REQUEST_SUCCESS,
  posts,
});

export const getPostsRequestError = (error) => ({
  type: TYPES.GET_POSTS_REQUEST_SUCCESS,
  error,
});
