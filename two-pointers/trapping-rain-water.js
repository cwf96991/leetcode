/**
 * @param {number[]} height
 * @return {number}
 */
// https://youtu.be/ZI2z5pq0TqA

//concept : min(max height of L,max height of R) - height[i]
// if result is less than 0 then result is 0

var trap = function (height) {
  let [left, right] = [0, height.length - 1];
  let [maxLeft, maxRight, area] = [0, 0, 0];

  while (left < right) {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const [leftWindow, rightWindow] = getWindows(
      height,
      left,
      maxLeft,
      right,
      maxRight
    );

    const isRightGreater = leftHeight <= rightHeight;
    if (isRightGreater) {
      if (hasNewMax(maxLeft, leftHeight)) maxLeft = leftHeight;
      else area += leftWindow;

      left++;
    }

    const isRightLess = rightHeight < leftHeight;
    if (isRightLess) {
      if (hasNewMax(maxRight, rightHeight)) maxRight = rightHeight;
      else area += rightWindow;

      right--;
    }
  }

  return area;
};

const hasNewMax = (max, height) => max < height;

const getHeights = (height, left, right) => [height[left], height[right]];

const getWindows = (height, left, maxLeft, right, maxRight) => {
  const [leftHeight, rightHeight] = getHeights(height, left, right);
  const [leftWindow, rightWindow] = [
    maxLeft - leftHeight,
    maxRight - rightHeight,
  ];

  return [leftWindow, rightWindow];
};