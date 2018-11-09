// https://leetcode.com/problems/longest-common-prefix/

const assert = require("assert");

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let length = s.length;
  if (!length) return "";

  let answer = "";

  while (length--) {
    answer += s[length];
  }

  return answer;
};

assert.equal(reverseString("hello"), "olleh");
assert.equal(
  reverseString("A man, a plan, a canal: Panama"),
  "amanaP :lanac a ,nalp a ,nam A"
);
