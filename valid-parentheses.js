// https://leetcode.com/problems/valid-parentheses/

const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (mapping[bracket]) {
      if (!stack.length) return false;
      if (stack[stack.length - 1] !== mapping[bracket]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
};

assert.equal(isValid("(])"), false);
assert.equal(isValid(""), true);
assert.equal(isValid("]"), false);
assert.equal(isValid("("), false);
assert.equal(isValid("(("), false);
assert.equal(isValid("(()"), false);
assert.equal(isValid("((]"), false);
assert.equal(isValid("()"), true);
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("(]"), false);
assert.equal(isValid("([)]"), false);
assert.equal(isValid("{[]}"), true);


// Time complexity : O(n)O(n) because we traverse the given string.
// Space complexity : O(n)O(n) as in the worst case, we will pushing all the brackets onto the stack. e.g. ((((((((((.