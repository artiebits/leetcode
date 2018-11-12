const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length < 2) return true;
  const newString = s.replace(/\W|\s/g, '').toLowerCase();
  const length = newString.length;
  if (newString[0] !== newString[length - 1]) return false;
  return isPalindrome(newString.slice(1, length - 1));
};

assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.equal(isPalindrome("race a car"), false);