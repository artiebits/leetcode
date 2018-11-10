// https://leetcode.com/problems/string-to-integer-atoi/

const assert = require("assert");

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const validIntegers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const stringInteger = str
    .trim()
    .split(" ")[0]
    .split(".")[0];

  if (stringInteger[0] === "-" && validIntegers.indexOf(stringInteger[1]) < 0)
    return 0;
  if (stringInteger[0] === "+" && validIntegers.indexOf(stringInteger[1]) < 0)
    return 0;

  const isNegative = stringInteger[0] === "-";
  let validInteger = "";

  for (
    let i = isNegative ? 1 : stringInteger[0] === "+" ? 1 : 0;
    i < stringInteger.length;
    i++
  ) {
    if (validIntegers.indexOf(stringInteger[i]) > -1) {
      validInteger += stringInteger[i];
    } else {
      break;
    }
  }

  const myInteger = isNegative ? -(validInteger - 0) : validInteger - 0;

  if (myInteger <= INT_MIN) {
    return INT_MIN;
  } else if (myInteger >= INT_MAX) {
    return INT_MAX;
  }

  return myInteger;
};

assert.equal(myAtoi("  -0012a42"), -12);
assert.equal(myAtoi("-000000000000001"), -1);
assert.equal(myAtoi("+1"), 1);
assert.equal(myAtoi("1abc"), 1);
assert.equal(myAtoi("-a"), 0);
assert.equal(myAtoi("+-2"), 0);
assert.equal(myAtoi("3.14159"), 3);
assert.equal(myAtoi("42"), 42);
assert.equal(myAtoi("   -42"), -42);
assert.equal(myAtoi("4193 with words"), 4193);
assert.equal(myAtoi("words and 987"), 0);
assert.equal(myAtoi("-91283472332"), -2147483648);
assert.equal(myAtoi("2147483648"), 2147483647);
