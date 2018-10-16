describe("given a board of characters and a list of words", () => {
  let board;
  let words;
  beforeEach(() => {
    words = ["GEEKS", "FOR", "QUIZ", "GO"];

    // prettier-ignore
    board = [
            ["g", "i", "z"],
            ["u", "e", "k"],
            ["q", "s", "e"]];
  });
});

const solve = (board, words) => {
  return words.filter(word => findInBoard([], word));
};

const findInBoard = (startingPoints, word, usedPoints = {}, acc = false) => {
  if (!startingPoints.length) {
    return acc;
  }
};

// prettier-ignore
const neighbors = [
  [-1, -1],[0, -1],[1, -1],
  [-1, 0],        ,[1, 0],
  [-1, 1],[0, 1],[1, 1]
];
const search = (point, chars, usedPoints = {}, acc = false) => {
  if (!chars.length) {
    return true;
  }
  neighbors.map(delta => {
    const [dx, dy] = delta;
    const [x, y] = point;
    const nextPoint = [];
    search();
  });
};

const dfs = (node, value) => {
  if (!node) {
    return false;
  }

  if (node.value === value) {
    return true;
  }

  let found;
  found = dfs(node.left);
  if (found) {
    return true;
  }

  return dfs(node.right);
};
