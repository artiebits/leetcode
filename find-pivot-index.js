// https://leetcode.com/problems/find-pivot-index/
const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let sum = nums.reduce((x, y) => x + y, 0);
  for (let index = 0; index < nums.length; index++) {
    sum -= nums[index];
    if (leftSum === sum) {
      return index;
    }
    leftSum += nums[index];
  }
  return -1;
};

assert.equal(pivotIndex([1, 2, 3]), -1);
assert.equal(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
assert.equal(pivotIndex([-1, -1, 0, 1, 1, 1]), 5);
assert.equal(pivotIndex([-1, -1, -1, 0, 1, 1]), 0);

// Time complexity is O(n)
// Space complexity is O(1) because the space used by `leftSum` and `sum`
