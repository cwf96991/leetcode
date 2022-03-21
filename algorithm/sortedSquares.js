/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
 * two pointer 
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let result = [];
  let i = 0;
  let j = n - 1;
  for (p = n - 1; p >= 0; p--) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[p] = nums[i] * nums[i];
      i++;
    } else {
      result[p] = nums[j] * nums[j];
      j--;
    }
  }
  return result;
};
