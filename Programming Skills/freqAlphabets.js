/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 */
 const map = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"};

var freqAlphabets = function (s) {
//   let split = s.split("#");
//   let result = "";
//   for (let i = 0; i < split.length; i++) {
//     let tmp = "";
//     console.log(split[i])
//     if (split[i].length >= 2&&i!=split.length-1) {
//       let encode = split[i].substring(split[i].length - 2);
//       tmp = String.fromCharCode(encode - 1 + "a".charCodeAt(0));
//       let upperpart = (split[i] - encode).toString().replaceAll("0", "");
//       console.log(upperpart);
//       for (let j = 0; j < upperpart.length; j++) {
//         result += String.fromCharCode(upperpart[j] - 1 + "a".charCodeAt(0));
//       }
//       result += tmp;
//       console.log(result);
//     } else {
//       for (let j = 0; j < split[i].length; j++) {
//         result += String.fromCharCode(split[i][j] - 1 + "a".charCodeAt(0));
//       }
//     }
//   }
//   return result;

  let ret = '';
  for (let i = 0; i < s.length; ++i) {
    ret += map[s[i + 2] === '#' ? (i += 2, s[i - 2] + s[i - 1]) : s[i]];
  }
  return ret;

};
