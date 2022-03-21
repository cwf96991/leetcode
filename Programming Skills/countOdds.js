/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Example 1:
https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

 */
/* 
4 case only
low high
odd  even (3,8)  
odd  odd  (3,7)
even odd  (4,7)
even even (4,8)
*/
var countOdds = function (low, high) {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};
