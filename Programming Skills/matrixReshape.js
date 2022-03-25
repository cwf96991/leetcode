/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * https://leetcode.com/problems/reshape-the-matrix/
 */
var matrixReshape = function (nums, r, c) {
  let m = nums.length,
    n = nums[0].length;
  if (r * c != m * n) return nums;
  let reshaped = [];
  for (i = 0; i < r * c; i++)
    reshaped[Math.floor(i / c)][i % c] = nums[Math.floor(i / n)][i % n];
  return reshaped;
};
