/**
 * @param {number[]} salary
 * @return {number}
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500 
*/
var average = function (salary) {
  return (
    salary
      .sort((a, b) => a - b)
      .filter((s, idx) => {
        if (idx === 0 || idx === salary.length - 1) {
          return;
        } else {
          return s;
        }
      })
      .reduce((acc, cumm) => acc + cumm) /
    (salary.length - 2)
  );
};
