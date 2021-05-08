import { TYPES } from "../action-types";

const initialState = {
  posts: [],
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

    default:
      return state;
  }
};
