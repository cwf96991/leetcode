/**
 * @param {string} s
 * @return {number}
 */

//iterate through the string
//use the set / array to store the substring
//if the set contains the current substring then clear the set and add the current substring , i set to the current index
//keep update the max length of the set

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0, sl = s.length; r < sl; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }

    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
};