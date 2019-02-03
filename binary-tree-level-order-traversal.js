// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  let visited = [
    {
      node: root,
      level: 0
    }
  ];

  let answer = [[root.val]];

  while (visited.length) {
    const { node, level } = visited.shift();
    const nextLevel = level + 1;

    if (node.left) {
      visited.push({
        node: node.left,
        level: nextLevel
      });
      updateAnswer(answer, node.left, nextLevel);
    }

    if (node.right) {
      visited.push({
        node: node.right,
        level: nextLevel
      });
      updateAnswer(answer, node.right, nextLevel);
    }
  }

  return answer;
};

function updateAnswer(answer, node, level) {
  if (answer[level]) {
    answer[level].push(node.val);
  } else {
    answer[level] = [node.val];
  }
}

assert.deepEqual(
  levelOrder({
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4
      }
    },
    right: {
      val: 3,
      left: {
        val: 5
      }
    }
  }),
  [[1], [2, 3], [4, 5]]
);

assert.deepEqual(
  levelOrder({
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
  [[3], [9, 20], [15, 7]]
);

assert.deepEqual(
  levelOrder({
    val: 3,
    left: {
      val: 9
    }
  }),
  [[3], [9]]
);
