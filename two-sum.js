// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashMap = {};
  for (var index = 0; index < nums.length; index++) {
    const num = nums[index];
    const secondIndex = hashMap[target - num];
    if (secondIndex !== undefined) {
      return [secondIndex, index];
    }
    hashMap[num] = index;
  }
  return [];
};
