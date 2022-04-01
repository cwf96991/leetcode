/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
var search = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  // find the index of the smallest value using binary search.
  // Loop will terminate since mid < hi, and lo or hi will shrink by at least 1.
  // Proof by contradiction that mid < hi: if mid==hi, then lo==hi and loop would have been terminated.
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > nums[hi]) lo = mid + 1;
    else hi = mid;
  }
  // lo==hi is the index of the smallest value and also the number of places rotated.
  let rot = lo;
  lo = 0;
  hi = nums.length - 1;
  // The usual binary search and accounting for rotation.
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let realmid = (mid + rot) % nums.length;
    if (nums[realmid] == target) return realmid;
    if (nums[realmid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
};
