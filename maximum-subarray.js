// https://leetcode.com/problems/maximum-subarray/

const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums.length) {
    return 0;
  }

  let prev = nums[0];
  let answer = prev;

  for (let index = 1; index < nums.length; index++) {
    prev = Math.max(prev + nums[index], nums[index]);
    answer = Math.max(answer, prev);
  }

  return answer;
};

// Time complexity: O(n).

assert.equal(maxSubArray([]), 0);
assert.equal(maxSubArray([1]), 1);
assert.equal(maxSubArray([4, -1]), 4);
assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
