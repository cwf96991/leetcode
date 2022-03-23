/**
 * @param {number[][]} mat
 * @return {number}
 * https://leetcode.com/problems/matrix-diagonal-sum/
 */
var diagonalSum = function (mat) {
  let l = 0;
  let r = mat.length - 1;
  let sum = 0;
  for (let index = 0; index < mat.length; index++) {

    if (l == r) {
      sum += mat[index][l];
    } else {
      sum += mat[index][l] + mat[index][r];
    }
    l++;
    r--;
  }
  return sum;
};
