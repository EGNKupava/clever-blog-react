import { TYPES } from "../action-types";

const initialState = {
  messages: [],
  totalResults: null,
  isLoading: false,
  isError: false,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_MESSAGES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TYPES.GET_MESSAGES_REQUEST_SUCCESS: {
      const { messages, totalResults } = action;
      return {
        ...state,
        messages,
        totalResults,
        isLoading: false,
      };
    }

    case TYPES.GET_MESSAGES_REQUEST_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }

    default:
      return state;
  }
};
