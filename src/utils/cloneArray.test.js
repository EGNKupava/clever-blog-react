import { cloneArray } from "./cloneArray";

test("clone array", () => {
  const array = [1, 2, 3, 4];
  // expect(cloneArray(array)).toBe(array);
  expect(cloneArray(array)).not.toBe(array);
  expect(cloneArray(array)).toEqual(array);
});
