/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    const guess = nums[mid];

    const isTarget = guess === target;
    if (isTarget) return mid;

    const isTargetGreater = guess < target;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = target < guess;
    if (isTargetLess) right = mid - 1;
  }
  return -1;
};
