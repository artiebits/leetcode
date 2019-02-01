// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

const assert = require("assert");

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
var maxDepth = function(root) {
  const visited = [];

  if (root) {
    visited.push({
      node: root,
      depth: 1
    });
  }

  let result = 0;

  while (visited.length) {
    const { node, depth } = visited.pop();
    result = Math.max(depth, result);
    node.children.forEach(children => {
      visited.push({
        node: children,
        depth: depth + 1
      });
    });
  }
  return result;
};
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepthRecursive = function(root) {
  if (root === null) {
    return 0;
  }
  if (!root.children.length) {
    return 1;
  }
  const heights = root.children.map(children => maxDepth(children));
  return Math.max(...heights) + 1;
};

const tree = {
  $id: "1",
  children: [
    {
      $id: "2",
      children: [
        { $id: "5", children: [], val: 5 },
        { $id: "6", children: [], val: 6 }
      ],
      val: 3
    },
    { $id: "3", children: [], val: 2 },
    { $id: "4", children: [], val: 4 }
  ],
  val: 1
};

assert.deepEqual(maxDepth(tree), 3);
