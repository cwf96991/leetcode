/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.com/problems/rotate-array/
 //remark:
 1)reverse
 2)check edge case:
    nums maybe null or size smaller than 2 
    k may larger than length of nums
 3)reverse method:
 */

function reverse(nums,i,j){
    let tmp = 0;       
    while(i < j){
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
    }
}
 var rotate = function(nums, k) {
    if(nums == null || nums.length < 2){
        return;
    }
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
    console.log(nums)

};

