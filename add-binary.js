// https://leetcode.com/problems/add-binary

const assert = require("assert");

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let answer = "";

  while (i >= 0 || j >= 0) {
    const x = Number(a[i]) || 0;
    const y = Number(b[j]) || 0;

    let sum = carry + x + y;
    answer = (sum % 2) + answer;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }

  return carry ? carry + answer : answer;
};

assert.equal(addBinary("100", "110010"), "110110");
assert.equal(addBinary("1111", "1111"), "11110");
assert.equal(addBinary("11", "1"), "100");
assert.equal(addBinary("1010", "1011"), "10101");
assert.equal(addBinary("1010", "1111"), "11001");
