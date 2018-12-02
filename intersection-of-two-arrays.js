const assert = require("assert");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var binarySearch = function(target, nums) {
  let min = 0;
  let max = nums.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (nums[guess] === target) {
      return true;
    }
    if (nums[guess] > target) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }

  return false;
};

var intersection = function(nums1, nums2) {
  let sortedNums2 = nums2.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    const current = nums1[i];
    if (binarySearch(current, sortedNums2) && !result.includes(current)) {
      result.push(current);
    }
  }

  return result;
};

assert.deepEqual(intersection([9, 4, 9, 8, 4], [4, 9, 5]), [9, 4]);
assert.deepEqual(intersection([1, 2, 2, 1], [2, 2]), [2]);
assert.deepEqual(
  intersection(
    [
      61,
      24,
      20,
      58,
      95,
      53,
      17,
      32,
      45,
      85,
      70,
      20,
      83,
      62,
      35,
      89,
      5,
      95,
      12,
      86,
      58,
      77,
      30,
      64,
      46,
      13,
      5,
      92,
      67,
      40,
      20,
      38,
      31,
      18,
      89,
      85,
      7,
      30,
      67,
      34,
      62,
      35,
      47,
      98,
      3,
      41,
      53,
      26,
      66,
      40,
      54,
      44,
      57,
      46,
      70,
      60,
      4,
      63,
      82,
      42,
      65,
      59,
      17,
      98,
      29,
      72,
      1,
      96,
      82,
      66,
      98,
      6,
      92,
      31,
      43,
      81,
      88,
      60,
      10,
      55,
      66,
      82,
      0,
      79,
      11,
      81
    ],

    [
      5,
      25,
      4,
      39,
      57,
      49,
      93,
      79,
      7,
      8,
      49,
      89,
      2,
      7,
      73,
      88,
      45,
      15,
      34,
      92,
      84,
      38,
      85,
      34,
      16,
      6,
      99,
      0,
      2,
      36,
      68,
      52,
      73,
      50,
      77,
      44,
      61,
      48
    ]
  ),

  [61, 45, 85, 89, 5, 77, 92, 38, 7, 34, 44, 57, 4, 6, 88, 0, 79]
);
