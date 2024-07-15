/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    zeroCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            zeroCount++;    
        } else {
            nums[i-zeroCount] = nums[i]
        }

    }
    for(let i = nums.length-zeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};