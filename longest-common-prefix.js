// https://leetcode.com/problems/longest-common-prefix/

const assert = require("assert");

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!Array.isArray(strs) || !strs.length) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix.length) return "";
    }
  }
  return prefix;
};

assert.equal(longestCommonPrefix([]), "");
assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), "");
