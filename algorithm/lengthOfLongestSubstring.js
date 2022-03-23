/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let l = 0;

  let output = 0;

  let map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map[s[r]] != undefined) {
      l = Math.max(l, map[s[r]] + 1);
    }
    map[s[r]] = r;

    output = Math.max(output, r - l + 1);
  }
  return output;
};
