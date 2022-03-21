/**
 * @param {number} n
 * @return {boolean}
 https://leetcode.com/problems/happy-number/
 */
function squareArray(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i] * list[i];
  }
  return sum;
}
var isHappy = function (n) {
  let list = [];

  let output = n;
  while (!list.includes(output)) {
    list.push(output);
    let nums = output.toString().split("");

    output = squareArray(nums);
    if (output == 1) {
      return true;
    }
  }
  return false;
};
