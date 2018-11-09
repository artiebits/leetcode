// https://leetcode.com/problems/implement-strstr

const assert = require("assert");
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  for (let i = 0; i < haystackLength; i++) {
    if (!haystack[i] === needle[0]) continue;
    if (haystack.slice(i, i + needleLength) === needle) {
      return i;
    }
  }

  return -1;
};

assert.equal(strStr("", ""), 0);
assert.equal(strStr("hello", "ll"), 2);
assert.equal(strStr("aaaaa", "bba"), -1);
assert.equal(strStr("a", "a"), 0);
