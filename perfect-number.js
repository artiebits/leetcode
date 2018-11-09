// https://leetcode.com/problems/perfect-number/

const assert = require("assert");

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num < 1) return false;
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
    if (sum > num) {
      return false;
    }
  }

  return sum === num;
};

assert.equal(checkPerfectNumber(6), true);
assert.equal(checkPerfectNumber(28), true);
assert.equal(checkPerfectNumber(496), true);
assert.equal(checkPerfectNumber(8128), true);
assert.equal(checkPerfectNumber(0), false);
assert.equal(checkPerfectNumber(7), false);
