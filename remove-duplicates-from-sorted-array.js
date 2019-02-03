// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums.length) return 0;
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
    j++;
  }
  return i + 1;
};

assert.deepEqual(removeDuplicates([1, 1, 2]), 2);
assert.deepEqual(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
