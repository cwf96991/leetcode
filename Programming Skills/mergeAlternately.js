/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * https://leetcode.com/problems/merge-strings-alternately/
 */
var mergeAlternately = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let i = 0;
  let j = 0;
  let result = "";
  while (i < n || j < m) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }
  return result;
};
