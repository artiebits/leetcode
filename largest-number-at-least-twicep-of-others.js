// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length === 1) {
    return 0;
  }

  let largestIndex = -1;
  let secondIndex = -1;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (largestIndex === -1 || nums[i] > nums[largestIndex]) {
      secondIndex = largestIndex;
      largestIndex = i;
    } else if (secondIndex === -1 || nums[i] > nums[secondIndex]) {
      secondIndex = i;
    }
  }

  return nums[largestIndex] >= nums[secondIndex] * 2 ? largestIndex : -1;
};

assert.deepEqual(dominantIndex([]), -1);
assert.deepEqual(dominantIndex([0, 1]), 1);
assert.deepEqual(dominantIndex([1]), 0);
assert.deepEqual(dominantIndex([3, 6, 1, 0]), 1);
assert.deepEqual(dominantIndex([6, 3]), 0);
assert.deepEqual(dominantIndex([1, 2, 3, 4]), -1);
assert.deepEqual(dominantIndex([1, 2, 16, 35, 44, 100, 27, 0]), 5);
