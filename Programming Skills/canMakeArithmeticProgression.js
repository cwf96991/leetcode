/**
 * @param {number[]} arr
 * @return {boolean}
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let diff = 0;
  diff = arr[1] - arr[0];
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != diff) {
      return false;
    }
  }
  return true;
};
