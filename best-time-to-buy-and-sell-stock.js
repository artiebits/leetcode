// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// #selection-sort

const assert = require("assert");

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  var profit = 0;
  var minPrice = Number.MAX_SAFE_INTEGER;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }
  return profit;
};

// Time complexity : O(n) - O(n). Only a single pass is needed.
// Space complexity : O(1) - O(1). Only two variables are used.
assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
