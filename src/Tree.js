class Node {
    constructor({ value, children = [] }) {
        this.value = value;
        this.children = children;
    }
}

class BinaryNode {
    constructor({ value, left = null, right = null }) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

module.exports = {
    Node,
    BinaryNode,
};