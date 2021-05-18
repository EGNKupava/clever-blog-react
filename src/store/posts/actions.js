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
