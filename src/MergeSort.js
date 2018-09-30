const merge = (arr, startIdx, middleIdx, endIdx) => {
  const left = arr.slice(startIdx, middleIdx).concat(Infinity);
  const right = arr.slice(middleIdx, endIdx + 1).concat(Infinity);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = startIdx;
  while (i <= endIdx) {
    if (left[leftIdx] < right[rightIdx]) {
      arr[i] = left[leftIdx];
      leftIdx = leftIdx + 1;
    } else {
      arr[i] = right[rightIdx];
      rightIdx = rightIdx + 1;
    }
    i++;
  }
};

const mergeSort = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  if (startIdx < endIdx) {
    const middleIdx = Math.floor((endIdx + startIdx) / 2);
    mergeSort(arr, startIdx, middleIdx);
    mergeSort(arr, middleIdx + 1, endIdx);
    merge(arr, startIdx, middleIdx + 1, endIdx);
  }
  return arr;
};

module.exports.sort = mergeSort;