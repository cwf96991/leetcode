/**
 * Time O(N) | Space(1)
 * @param {number[]} height
 * @return {number}
 */

// Step1: set start and end position and create a maxarea
// Step2: use Math.max to compare the area of the condition and update the maxarea if needed
// Step3: if the value of height[end] > height[start] shift the position of the start.
// Step4: iterate over the list and return the maxarea


var maxArea = function (height) {
  var start = 0;
  var end = height.length - 1;
  var maxarea = 0;
  while (start < end) {
    maxarea = Math.max(
      maxarea,
      Math.min(height[start], height[end]) * (end - start)
    );
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxarea;
};

