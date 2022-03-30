/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/monotonic-array/
 */
var isMonotonic = function (nums) {
  if (nums.length <= 2) {
    return true;
  }
  let isIncreasing;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    } else if (isIncreasing == null) {
      isIncreasing = nums[i] - nums[i - 1] >= 0;
    } else {
      if (isIncreasing != nums[i] - nums[i - 1] >= 0) {
        return false;
      }
    }
  }
  return true;
};
