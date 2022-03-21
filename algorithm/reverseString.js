/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * https://leetcode.com/problems/reverse-string/
 */
 var reverseString = function (s) {
    swap(s, 0, s.length - 1);
  };
  
  function swap(s, i, j) {
    if (i >=j) return;
    
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
      swap(s, ++i, --j);
      console.log(s)
  }
  