// https://leetcode.com/problems/merge-sorted-array/

const assert = require("assert");

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    const target = nums2[i];
    let j = m + i - 1;
    while (j >= 0 && nums1[j] > target) {
      nums1[j + 1] = nums1[j];
      j--;
    }
    nums1[j + 1] = target;
  }
};

assert.deepEqual(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [
  1,
  2,
  2,
  3,
  5,
  6
]);
