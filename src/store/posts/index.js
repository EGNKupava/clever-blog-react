import { TYPES } from "../action-types";

const initialState = {
  posts: {
    posts: [],
    page: null,
    postsPerPage: null,
    totalReults: null,
  },
  isLoading: false,
  isError: false,
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_POSTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TYPES.GET_POSTS_REQUEST_SUCCESS: {
      const { posts } = action;
      return {
        ...state,
        posts,
        isLoading: false,
      };
    }

    case TYPES.GET_POSTS_REQUEST_ERROR: {
      const { error } = action;
      return {
        ...state,
        isError: true,
        error,
      };
    }

    case TYPES.NEW_POST_CARD_TOGGLE: {
      return {
        ...state,
        newPostCardVisible: !state.newPostCardVisible,
      };
    }

    default:
      return state;
  }
};
