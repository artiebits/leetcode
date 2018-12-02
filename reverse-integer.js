// https://leetcode.com/problems/reverse-integer

const assert = require("assert");

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  let result = 0;
  while (x !== 0) {
    const n = x % 10;
    result = result * 10 + n;
    if (result < INT_MIN || result > INT_MAX) return 0;
    x = parseInt(x / 10);
  }
  return result;
};

assert.equal(reverse(900000), 9);
assert.equal(reverse(123), 321);
assert.equal(reverse(-123), -321);
assert.equal(reverse(120), 21);
