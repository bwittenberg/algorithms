const { BinaryNode } = require("../Tree");

describe("lowest common ancestor", () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryNode({
      value: 20,
      left: new BinaryNode({
        value: 8,
        left: new BinaryNode({
          value: 4
        }),
        right: new BinaryNode({
          value: 12,
          left: new BinaryNode({
            value: 10
          }),
          right: new BinaryNode({
            value: 14
          })
        })
      }),
      right: new BinaryNode({
        value: 22
      })
    });
  });

  it("should find the lowest common ancestor", () => {});
});

const findLowestCommonAncestor = ({ node, searchValues }) => {};

const depthFirstSearch = ({ node, searchValue, candidate = [] }) => {
  if (!node) {
    return candidate;
  }

  if ([node.left, node.right].includes(searchValue)) {
    candidate.push(node);
    return candidate;
  }
};
