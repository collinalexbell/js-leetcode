/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
 let right = nums.reduce((prev, cur) => prev + cur);
 let left = 0;
 if(right == 0) {
    return 0;
 }
 if(nums.length < 0) {
    return -1;
 }
 for(let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if(left == right) {
        return i;
    }
    left += nums[i];
 }
 return -1;
};