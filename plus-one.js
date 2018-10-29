// https://leetcode.com/problems/plus-one/

const assert = require("assert");

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length;
  while (index-- > 0) {
    if (digits[index] < 9) {
      digits[index]++;
      return digits;
    }
    digits[index] = 0;
  }
  digits.unshift(1);
  return digits;
};

assert.deepEqual(plusOne([9, 9]), [1, 0, 0]);
assert.deepEqual(plusOne([1, 9, 9]), [2, 0, 0]);
assert.deepEqual(plusOne([0]), [1]);
assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);
assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
assert.deepEqual(
  plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
);

// Time complexity is O(n), where `n` is the length of `digits`
// Space complexity is O(1), the space used by `index`
