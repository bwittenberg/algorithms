const { sort, recursiveSort } = require("../InsertionSort");

describe("insertion sort", () => {
  describe("iterative", () => {
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
  describe("recursive", () => {
    it("should sort empty array", () => {
      const arr = [];
      recursiveSort(arr);
      expect(arr).toEqual([]);
    });

    it("should sort an unsorted array", () => {
      const arr = [1, 10, 5];
      recursiveSort(arr);
      expect(arr).toEqual([1, 5, 10]);
    });

    it("should sort sorted array", () => {
      const arr = [1, 5, 10];
      recursiveSort(arr);
      expect(arr).toEqual([1, 5, 10]);
    });
  });
});
