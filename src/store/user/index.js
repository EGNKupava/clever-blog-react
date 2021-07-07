// import { TYPES } from "../action-types";

const initialState = {
  name: "Евгений",
  avatarSrc:
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
  id: 1,
  isLoading: false,
  isError: false,
  isAuth: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
