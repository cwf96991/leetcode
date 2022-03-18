/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 * https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 */
function getDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function checkValid(x1, y1, x2, y2) {
  return x2 == x1 || y2 == y1;
}
var nearestValidPoint = function (x, y, points) {
  let distance = Infinity;
  let index = 0;

  for (var i = 0; i < points.length; i++) {
    let validPoint = checkValid(x, y, points[i][0], points[i][1]);
    if (validPoint) {
      let tempDistance = getDistance(x, y, points[i][0], points[i][1]);
      if (tempDistance < distance) {
        distance = tempDistance;
        index = i;
      }
    }
  }
  return distance == Infinity ? -1 : index;
};
