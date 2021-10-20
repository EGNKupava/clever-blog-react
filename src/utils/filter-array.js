export const filterArray = (array, filterKey) => {
  if (array && array.length) {
    return array.filter((item) => filterKey !== item);
  }
  return [];
};
