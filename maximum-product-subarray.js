// https://leetcode.com/problems/maximum-product-subarray/

const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums.length) {
    return 0;
  }

  let prev = nums[0];
  let answer = nums[0];

  for (let index = 1; index < nums.length; index++) {
    prev = nums[index] * nums[index - 1];
    answer = Math.max(answer, prev);
  }

  return answer;
};

assert.equal(maxProduct([2, 3, -2, 4]), 6);
assert.equal(maxProduct([-2, 0, -1]), 0);
