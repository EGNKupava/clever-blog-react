import { subtract } from "./subtract";

test("property subtract two number", () => {
  expect(subtract(5, 4)).toBe(1); //toBeUndefined .toContain(item) .toEqual(value) .toBeFalsy() .toBeTruthy()
  expect(subtract(5, 4)).toBeDefined();
});
