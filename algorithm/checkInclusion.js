/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * How do we know string p is a permutation of string s? Easy, each character in p is in s too. So we can abstract all permutation strings of s to a map (Character -> Count). i.e. abba -> {a:2, b:2}. Since there are only 26 lower case letters in this problem, we can just use an array to represent the map.
How do we know string s2 contains a permutation of s1? We just need to create a sliding window with length of s1, move from beginning to the end of s2. When a character moves in from right of the window, we subtract 1 to that character count from the map. When a character moves out from left of the window, we add 1 to that character count. So once we see all zeros in the map, meaning equal numbers of every characters between s1 and the substring in the sliding window, we know the answer is true.

 */
function allZero(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] != 0) return false;
  }
  return true;
}
var checkInclusion = function (s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 > len2) return false;
  let count = [];
  for (let i = 0; i < len1; i++) {
    count[s1[i] - "a"]++;
    count[s2[i] - "a"]++;
  }
  if (allZero(count)) return true;

  for (let index = len1; index < len2; index++) {
    count[s2[index] - "a"]--;
    count[s2[index - len1] - "a"]++;
    if (allZero(count)) return true;
  }
  return false;
};
