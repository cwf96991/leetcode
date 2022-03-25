/**
 * @param {string} command
 * @return {string}
 * https://leetcode.com/problems/goal-parser-interpretation/
 */
var interpret = function (command) {
  let temp = "";
  let result = "";
  for (var i = 0; i < command.length; i++) {
    temp += command[i];
    if (temp == "G") {
      result += "G";
      temp = "";
    } else if (temp == "()") {
      result += "o";
      temp = "";
    } else if (temp == "(al)") {
      result += "al";
      temp = "";
    }
  }
  return result;
};
