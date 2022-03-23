/**
 * @param {number[][]} accounts
 * @return {number}
 * https://leetcode.com/problems/richest-customer-wealth/submissions/
 */

 const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
  const maximumWealth = (accounts) => {
    let wealthy_customer = 0;
    for (let balance of accounts) {
      const curr_wealth = sum(balance); // we will get total balance of the person
      wealthy_customer = Math.max(wealthy_customer, curr_wealth);
    }
    return wealthy_customer;
  };