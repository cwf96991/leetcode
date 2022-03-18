var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  let left = 1;
  let right = n;
  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(mid)) right = mid;
    else left = mid;
  }
  return isBadVersion(left) ? left : right;
};
