/**
 * @param {string[]} tokens
 * @return {number}
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */
var evalRPN = function (tokens) {
  let input = [];
  for (var i = 0; i < tokens.length; i++) {
    let str = parseInt(tokens[i]);

    if (str.toString() != "NaN") {
      input.push(str);
    } else {
      let operator = tokens[i];
      console.log("input", input);
      let first = input.pop();
      let second = input.pop();

      if (operator == "+") {
        let output = first + second;
        console.log(first + "+" + second);
        input.push(output);
        console.log(output);
      } else if (operator == "-") {
        let output = second - first;

        console.log(second + "-" + first);
        input.push(output);
        console.log(output);
      } else if (operator == "*") {
        let output = first * second;
        console.log(first + "*" + second);
        input.push(output);
        console.log(output);
      } else if (operator == "/") {
        let sign = second / first >= 1;
        console.log("output", Math.floor(Math.abs(second / first)));
        let output = Math.floor(Math.abs(second / first));
        input.push(output * (sign ? 1 : -1));
        console.log(second + "/" + first);

        console.log(output);
      }
    }
  }
  console.log(input);
  return input[0];
};
