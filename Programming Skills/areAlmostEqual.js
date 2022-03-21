/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Remark:
no need really swap the char, just check the char of indexes[0] and indexes[0] are the same or not equal
the indexes.length > 2 checking need do after the push index
 */
var areAlmostEqual = function (s1, s2) {
  let indexes = [];
  if (s1 == s2) return true;
  for (let index = 0; index < s1.length; index++) {
    if (s1[index] != s2[index]) {
      indexes.push(index);
    }
    if (indexes.length > 2) {
      return false;
    }
  }
  if (indexes.length == 1) return false;

  return s1[indexes[0]] == s2[indexes[1]] && s1[indexes[1]] == s2[indexes[0]];
};
