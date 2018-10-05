module.exports.sort = arr => {
  for (let insertionIndex = 0; insertionIndex < arr.length; insertionIndex++) {
    let smallestNumberIndex = insertionIndex;
    for (
      let searchIndex = insertionIndex + 1;
      searchIndex < arr.length;
      searchIndex++
    ) {
      if (arr[searchIndex] < arr[smallestNumberIndex]) {
        smallestNumberIndex = searchIndex;
      }
    }
    const smallestNumber = arr[smallestNumberIndex];
    arr[smallestNumberIndex] = arr[insertionIndex];
    arr[insertionIndex] = smallestNumber;
  }
  return arr;
};
