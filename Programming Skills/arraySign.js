/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
Remark:
if one of num is 0 ==> result 0
avoid overfloat can made all number to 1,0,-1
 */
var arraySign = function (nums) {
  let result = 1;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      return 0;
    } else {
      result *= nums[i] >= 1 ? 1 : -1;
    }
  }
  return result;
};
