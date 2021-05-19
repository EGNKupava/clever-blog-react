import { TYPES } from "../action-types";

export const getPostsRequest = () => ({
  type: TYPES.GET_POSTS_REQUEST,
});

export const getPostsRequestSuccess = (posts) => ({
  type: TYPES.GET_POSTS_REQUEST_SUCCESS,
  posts,
});

export const getPostsRequestError = (error) => ({
  type: TYPES.GET_POSTS_REQUEST_ERROR,
  error,
});

export const newPostCardToggle = () => ({
  type: TYPES.NEW_POST_CARD_TOGGLE,
});

export const newPost = (postData) => ({
  type: TYPES.NEW_POST_REQUEST,
  postData,
});
export const newPostSuccess = (post) => ({
  type: TYPES.NEW_POST_REQUEST_SUCCESS,
  post,
});
export const newPostError = (error) => ({
  type: TYPES.NEW_POST_REQUEST_ERROR,
  error,
});
