// https://leetcode.com/problems/lemonade-change/

const assert = require("assert");

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let map = {
    5: 0,
    10: 0,
    20: 0
  };
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];

    if (bill === 5) {
      map[5] += 1;
    } else if (bill === 10) {
      if (map[5]) {
        map[5] -= 1;
        map[10] += 1;
      } else {
        return false;
      }
    } else {
      if (map[10] && map[5]) {
        map[5] -= 1;
        map[10] -= 1;
      } else if (map[5] >= 3) {
        map[5] -= 3;
      } else {
        return false;
      }
      map[20] += 1;
    }
  }
  return true;
};

assert.equal(lemonadeChange([5, 5, 10]), true);
assert.equal(lemonadeChange([10, 10]), false);
assert.equal(lemonadeChange([5, 5, 10, 10, 20]), false);
assert.equal(lemonadeChange([]), true);
assert.equal(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]), false);
