import { reducer } from "./reducer";
import { TYPES } from "../action-types";

let state;

beforeEach(() => {
  state = {
    purchases: {
      tv: 0,
      fridge: 0,
      washingMashine: 0,
      sumPrice: 0,
    },
    isModalVisible: false,
  };
});

test("purchases reducer test", () => {
  const action = {
    type: TYPES.ADD_PURCHASES,
    id: "tv",
    counter: 2,
    price: 500,
  };

  const newState = reducer(state, action);

  expect(newState.isModalVisible).toBeFalsy();
  expect(newState.purchases.tv).toBe(2);
  expect(newState.purchases.sumPrice).toBe(500);
});

test("show Modal", () => {
  const action = {
    type: TYPES.SHOW_LIMIT_MODAL,
  };

  const newState = reducer(state, action);

  expect(newState.isModalVisible).toBeTruthy();
});

test("close Limit Modal", () => {
  const action = {
    type: TYPES.CLOSE_LIMIT_MODAL,
  };

  const newState = reducer(state, action);

  expect(newState.isModalVisible).toBeFalsy();
});

test("state equal undefined", () => {
  const action = {
    type: "INITIAL",
  };

  const newState = reducer(undefined, action);

  expect(newState).toEqual(state);
});

test("state clear", () => {
  const action = {
    type: TYPES.CLEAR_PURCHASES,
  };

  const newState = reducer(state, action);

  expect(newState.purchases).toEqual(state.purchases);
});
