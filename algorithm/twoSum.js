/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
var twoSum = function (numbers, target) {
 
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum == target) {
      break;
    } else if (sum < target) {
      ++i;
    } else {
      --j;
    }
  }

  return [i + 1, j + 1];
};
