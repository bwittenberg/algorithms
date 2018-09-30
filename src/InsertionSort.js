const recursiveSort = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  if (startIdx >= endIdx) {
    return;
  }
  const valueToSort = arr[endIdx];
  let j = endIdx;
  let i = endIdx - 1;
  recursiveSort(arr, startIdx, i);
  while (i >= 0 && arr[i] > valueToSort) {
    arr[i + 1] = arr[i];
    i = i - 1;
  }
  arr[i + 1] = valueToSort;
};

const sort = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    const valueToSort = arr[j];
    let i = j - 1;
    while (i < arr.length && arr[i] > valueToSort) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = valueToSort;
  }
  return arr;
};

module.exports = {
  sort,
  recursiveSort,
};