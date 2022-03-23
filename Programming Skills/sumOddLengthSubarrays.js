/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let res = 0;
  let n = arr.length;
  for (let i = 0; i < n; ++i) {
    res += parseInt((((i + 1) * (n - i) + 1) / 2)) * arr[i];
  }
  return res;
};
