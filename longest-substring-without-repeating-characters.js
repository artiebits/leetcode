// https://leetcode.com/problems/longest-substring-without-repeating-characters

const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const length = s.length;
  let result = 0;
  const chars = new Set();
  let i = 0;
  let j = 0;
  while (i < length && j < length) {
    if (chars.has(s[j])) {
      chars.delete(s[i++]);
    } else {
      chars.add(s[j++]);
      result = Math.max(result, j - i);
    }
  }

  return result;
};

assert.deepEqual(lengthOfLongestSubstring("aab"), 2);
assert.deepEqual(lengthOfLongestSubstring("abcajbc"), 4);
assert.deepEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert.deepEqual(lengthOfLongestSubstring("bbbbb"), 1);
assert.deepEqual(lengthOfLongestSubstring("pwwkew"), 3);
assert.deepEqual(lengthOfLongestSubstring(""), 0);
assert.deepEqual(lengthOfLongestSubstring("a"), 1);
assert.deepEqual(lengthOfLongestSubstring("au"), 2);
