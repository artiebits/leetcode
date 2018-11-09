//https://leetcode.com/problems/diagonal-traverse/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const assert = require("assert");

var findDiagonalOrder = function(matrix) {
  if (!matrix.length) return [];
  let i = 0;
  let j = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const len = m * n;
  const answer = [];

  for (let k = 0; k < len; k++) {
    answer.push(matrix[i][j]);
    if ((i + j) % 2 === 0) {
      if (j === n - 1) i++;
      else if (i === 0) j++;
      else {
        i--;
        j++;
      }
    } else {
      if (i === m - 1) j++;
      else if (j === 0) i++;
      else {
        i++;
        j--;
      }
    }
  }
  return answer;
};

assert.deepEqual(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [
  1,
  2,
  4,
  7,
  5,
  3,
  6,
  8,
  9
]);

assert.deepEqual(findDiagonalOrder([]), []);
