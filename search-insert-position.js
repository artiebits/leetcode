// https://leetcode.com/problems/search-insert-position/
// #binary-search #insertion-sort

const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// using insertion-sort
var searchInsert = function(nums, target) {
  let result = nums.length;
  let index = nums.length - 1;

  while (index >= 0 && nums[index] >= target) {
    result = index;
    index--;
  }

  return result;
};

assert.equal(searchInsert([1, 3, 5, 6], 5), 2);
assert.equal(searchInsert([1, 3, 5, 6], 2), 1);
assert.equal(searchInsert([1, 3, 5, 6], 7), 4);
assert.equal(searchInsert([1, 3, 5, 6], 0), 0);

// using binary search
var binarySearch = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (nums[guess] === target) {
      return guess;
    }
    if (nums[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return min;
};

assert.equal(binarySearch([1, 3, 5, 6], 5), 2);
assert.equal(binarySearch([1, 3, 5, 6], 2), 1);
assert.equal(binarySearch([1, 3, 5, 6], 7), 4);
assert.equal(binarySearch([1, 3, 5, 6], 0), 0);
