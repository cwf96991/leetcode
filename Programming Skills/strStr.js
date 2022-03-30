/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * https://leetcode.com/problems/implement-strstr/
 */
var strStr = function (haystack, needle) {
  if (needle == "") return 0;
  let tmp = haystack.split(needle);
  
  if (tmp[0] == haystack) {
    return -1;
  } else {
    return tmp[0].length;
  }
};
