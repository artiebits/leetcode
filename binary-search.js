const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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

  return -1;
};

let primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97
];

assert.equal(search(primes, 67), 18);
assert.equal(search(primes, 73), 20);
assert.equal(search([-1, 0, 3, 5, 9, 12], 9), 4);
assert.equal(search([-1, 0, 3, 5, 9, 12], 2), -1);
