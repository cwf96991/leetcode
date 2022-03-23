/**
 * @param {number[][]} coordinates
 * @return {boolean}
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/
 */
function onLine(p1, p2, p3) {
  let x = p1[0],
    y = p1[1],
    x1 = p2[0],
    y1 = p2[1],
    x2 = p3[0],
    y2 = p3[1];
  return (y - y1) * (x2 - x1) == (y2 - y1) * (x - x1);
}
var checkStraightLine = function (coordinates) {
  for (i = 2; i < coordinates.length; i++) {
    if (!onLine(coordinates[i], coordinates[0], coordinates[1])) return false;
  }
  return true;
};
