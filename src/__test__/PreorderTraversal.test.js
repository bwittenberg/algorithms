const { BinaryNode } = require("../Tree");
const { traverse, loopTraverse } = require("../PreorderTraversal");

describe("PreorderTraversal", () => {
  it("should handle empty node", () => {
    const root = null;
    const output = traverse({ node: root });
    expect(output).toEqual([]);
  });

  describe("when traversing a tree", () => {
    let root;
    beforeEach(() => {
      root = new BinaryNode({
        value: 100,
        left: new BinaryNode({
          value: 50,
          left: new BinaryNode({
            value: 25
          }),
          right: new BinaryNode({
            value: 75
          })
        }),
        right: new BinaryNode({
          value: 150,
          left: new BinaryNode({
            value: 125,
            left: new BinaryNode({
              value: 110
            })
          }),
          right: new BinaryNode({
            value: 175
          })
        })
      });
    });

    describe("recursive traverse", () => {
      it("should recursively return nodes in preorder", () => {
        const list = traverse({ node: root });
        expect(list).toEqual([100, 50, 25, 75, 150, 125, 110, 175]);
      });
    });

    describe("loop traverse", () => {
      it("should loop and return nodes in preorder", () => {
        const list = loopTraverse({ node: root });
        expect(list).toEqual([100, 50, 25, 75, 150, 125, 110, 175]);
      });
    });
  });
});
