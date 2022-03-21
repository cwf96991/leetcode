// .reduce((acc, cumm) => acc + cumm)

/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 */
var subtractProductAndSum = function (n) {
  let numberArr = n.toString().split("");

  let product = numberArr.reduce((acc, cumm) => acc * cumm,0);
  
  let sum = numberArr.reduce((acc, cumm) => parseInt(acc) + parseInt(cumm),0);
  
  return product - sum;
};
