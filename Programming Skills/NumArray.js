/**
 * @param {number[]} nums
 * https://leetcode.com/problems/range-sum-query-immutable/
 */
let array = [];
var NumArray = function (nums) {
  for (var i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  array = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left == 0) {
    return array[right];
  } else {
    return array[right] - array[left - 1];
  }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
