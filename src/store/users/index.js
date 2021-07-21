import { TYPES } from "../action-types";

const INITIAL_STATE = {
  users: [],
  totalUsers: null,
  isLoading: false,
  isError: false,
  error: "",
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TYPES.GET_USERS_SUCCESS: {
      const { users } = action;
      return {
        ...state,
        users,
        isLoading: false,
      };
    }
    case TYPES.GET_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        isError: true,
        error,
      };
    }
    case TYPES.ADD_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TYPES.ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case TYPES.ADD_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        isError: true,
        error,
      };
    }
    default:
      return state;
  }
};
