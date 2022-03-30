/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map1 = {};

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (map1[element] == undefined) {
      map1[element] = 1;
    } else {
      map1[element] = map1[element] + 1;
    }
  }
  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    map1[element] = map1[element] - 1;
  }

  for (m in map1) {
    if (map1[m] != 0) return false;
  }

  return true;
};
