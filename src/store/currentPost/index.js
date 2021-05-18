import { TYPES } from "../action-types";

const initialState = {
  post: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const currentPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TYPES.GET_POST_REQUEST_SUCCESS: {
      const { post } = action;
      return {
        ...state,
        post,
        isLoading: false,
      };
    }

    case TYPES.GET_POST_REQUEST_ERROR: {
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
