/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * https://leetcode.com/problems/find-the-difference/
 */
var findTheDifference = function (s, t) {
  let result = 0;
  for (var i = 0; i < t.length; i++) {
    var value = t.codePointAt(i);
    result += value;
  }
  for (var i = 0; i < s.length; i++) {
    var value = s.codePointAt(i);
    result -= value;
  }
  return String.fromCodePoint(result);
};
