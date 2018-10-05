const { sort } = require("../MergeSort");

describe("merge sort", () => {
  it("should sort empty array", () => {
    const arr = [];
    const sortedArray = sort(arr);
    expect(sortedArray).toEqual([]);
  });

  it("should sort an unsorted array", () => {
    const arr = [1, 10, 5];
    const sortedArray = sort(arr);
    expect(sortedArray).toEqual([1, 5, 10]);
  });

  it("should sort sorted array", () => {
    const arr = [1, 5, 10];
    const sortedArray = sort(arr);
    expect(sortedArray).toEqual([1, 5, 10]);
  });
});
