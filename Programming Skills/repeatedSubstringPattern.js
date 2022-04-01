/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/repeated-substring-pattern/
 */
var repeatedSubstringPattern = function (str) {
  let l = str.length;
  let half = Math.floor(l / 2);
  for (let i = half; i >= 1; i--) {
    if (l % i == 0) {
      let m = Math.floor(l / i);
      let subS = str.substring(0, i);
      let sb = "";
      for (let j = 0; j < m; j++) {
        sb += subS;
      }
      if (sb == str) return true;
    }
  }
  return false;
};
