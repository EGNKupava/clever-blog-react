import { createStore } from "redux";

const INITIAL_STATE = {
  name: "Evgen",
  secondName: "Kupava",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NAME": {
      return {
        ...state,
        name: action.name,
      };
    }

    case "CHANGE_SECOND_NAME": {
      return {
        ...state,
        secondName: action.secondName,
      };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store.getState());

const changeName = {
  type: "CHANGE_NAME",
  name: "Igor",
};

store.dispatch(changeName);

console.log(store.getState());

const changeSecondName = {
  type: "CHANGE_SECOND_NAME",
  secondName: "Kifirov",
};

store.dispatch(changeSecondName);

console.log(store.getState());
