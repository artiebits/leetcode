// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const assert = require("assert");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  const visited = [
    {
      node: root,
      depth: 1
    }
  ];

  while (visited.length) {
    const { node, depth } = visited.shift();

    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) {
      visited.push({
        node: node.left,
        depth: depth + 1
      });
    }

    if (node.right) {
      visited.push({
        node: node.right,
        depth: depth + 1
      });
    }
  }

  return 0;
};

assert.deepEqual(
  maxDepth({
    val: 3,
    left: {
      val: 9
    },
    right: {
      val: 20,
      left: {
        val: 15
      },
      right: {
        val: 7
      }
    }
  }),
  2
);
