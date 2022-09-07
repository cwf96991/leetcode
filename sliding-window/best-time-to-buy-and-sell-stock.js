/**
 * @param {number[]} prices
 * @return {number}
 */

//step 1: set left right and profit
//step 2: if prices of right is less than or equal to prices of left then slide (left = right)
//step 3: keep update maximum of global prices

var maxProfit = function (prices) {
  let profit = 0;
  let left = 0,
    right = 1;
  while (right < prices.length) {
    let canSlide = prices[right] <= prices[left];
    if (canSlide) {
      left = right;
    } 
    let window = prices[right] - prices[left];
    profit = Math.max(profit, window);
    right++;
  }
  return profit;
};
