/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
var searchRange = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  let ret = [-1,-1];
  // Search for the left one
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] < target) i = mid + 1;
    else j = mid;
  }
  if (nums[i] != target) return ret;
  else ret[0] = i;

  // Search for the right one
  j = n - 1; // We don't have to set i to 0 the second time.
  while (i < j) {
    let mid = Math.floor((i + j) / 2) + 1; // Make mid biased to the right
    if (nums[mid] > target) j = mid - 1;
    else i = mid; // So that this won't make the search range stuck.
  }
  ret[1] = j;
  return ret;
};
