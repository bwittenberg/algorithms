const traverse = ({ node, acc = [] }) => {
  if (!node) {
    return acc;
  }

  acc.push(node.value);

  traverse({ node: node.left, acc });
  traverse({ node: node.right, acc });

  return acc;
};

const loopTraverse = ({ node, acc = [] }) => {
  const stack = [node];

  while (stack.length) {
    node = stack.pop();
    if (!node) {
      continue;
    }
    acc.push(node.value);
    stack.push(node.right);
    stack.push(node.left);
  }
  return acc;
};

module.exports = {
  traverse,
  loopTraverse
};
