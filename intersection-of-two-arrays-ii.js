const assert = require("assert");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  const counter = {};
  nums1.forEach(num => {
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  });
  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    if (counter[current] > 0) {
      result.push(current);
      counter[current]--;
    }
  }
  return result;
};

assert.deepEqual(intersection([1, 2, 2, 1], [2, 2]), [2, 2]);
assert.deepEqual(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
