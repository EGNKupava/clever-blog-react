// import { TYPES } from "../action-types";

const INITIAL_STATE = {
  userName: "", //givenName
  token: "",
  profile: {},
  isAuth: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      const { profile, token } = action;
      return {
        userName: profile.givenName,
        token,
        profile,
        isAuth: true,
      };
    }

    case "LOGOUT": {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
