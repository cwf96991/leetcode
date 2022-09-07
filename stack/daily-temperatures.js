/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//step1: create a new stack to store the temperature and the index
//step2: keep add the data to the stack until the incoming temperature is larger than any one inside the stack
//step3: calculate the diff

const dailyTemperatures = function (temperatures) {
  const output = Array(temperatures.length).fill(0);

  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {
      const [temp, idx] = stack.pop();
      output[idx] = i - idx;
    }
    stack.push([temperatures[i], i]);
  }

  return output;
};
