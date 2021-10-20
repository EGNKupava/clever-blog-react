import { filterArray } from "./filter-array";

describe("Фильтрум массивы", () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5, 6, 6, 54, 2, 1, 2];
  });

  test("Фильтруем по 2", () => {
    const expectedArray = [1, 3, 4, 5, 6, 6, 54, 1];
    expect(filterArray(array, 2)).toBeDefined();
    expect(filterArray(array, 2)).toEqual(expectedArray);
  });

  test("Проверка на undefined", () => {
    expect(filterArray(undefined, 2)).toBeDefined();
  });

  test("Проверка на объект", () => {
    expect(filterArray({}, 2)).toBeDefined();
  });
});
