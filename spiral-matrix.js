// https://leetcode.com/problems/spiral-matrix

const assert = require("assert");

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];

  const answer = [];
  const m = matrix.length - 1;
  const n = matrix[0].length - 1;
  const len = matrix.length * matrix[0].length;
  let deep = 0;
  let dir = "toRight";
  let i = 0;
  let j = 0;

  for (let k = 0; k < len; k++) {
    answer.push(matrix[i][j]);

    if (dir === "toRight") {
      if (j === n - deep) {
        dir = "toBottom";
        i++;
      } else {
        j++;
      }
    } else if (dir === "toBottom") {
      if (i === m - deep) {
        dir = "toLeft";
        j--;
      } else {
        i++;
      }
    } else if (dir === "toLeft") {
      if (j === 0 + deep) {
        dir = "toTop";
        deep += 1;
        i--;
      } else {
        j--;
      }
    } else if (dir === "toTop") {
      if (i === 0 + deep) {
        dir = "toRight";
        j++;
      } else {
        i--;
      }
    }
  }

  return answer;
};

// Time complexity is O(M * N), where M is the number of rows and `N` is the number of columns.
// Space complexity is O(M * N), the space used by `answer` array

assert.deepEqual(spiralOrder([]), []);

assert.deepEqual(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [
  1,
  2,
  3,
  6,
  9,
  8,
  7,
  4,
  5
]);

assert.deepEqual(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]), [
  1,
  2,
  3,
  4,
  8,
  12,
  11,
  10,
  9,
  5,
  6,
  7
]);

assert.deepEqual(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ]),
  [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
);
