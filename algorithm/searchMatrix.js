/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * https://leetcode.com/problems/search-a-2d-matrix/
 */
var searchMatrix = function (matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let l = 0, r = m * n - 1;
    while (l != r){
        let mid = (l + r - 1) >> 1;
        console.log(mid)
        if (matrix[Math.floor(mid / m)][mid % m] < target)
            l = mid + 1;
        else 
            r = mid;
    }
    return matrix[Math.floor(r / m)][r % m] == target;
};
