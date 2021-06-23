import { createStore } from "redux";

const TYPES = {
  CHANGE_NAME: "CHANGE_NAME",
};

const INITIAL_STATE = {
  name: "Evgen",
  age: 30,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("store: ", store.getState());

const changeName = {
  type: TYPES.CHANGE_NAME,
  name: "Igor",
};

store.dispatch(changeName);

console.log("store: ", store.getState());
