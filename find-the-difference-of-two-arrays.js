/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const a = new Set(nums1);
    const b = new Set(nums2);
    const rvA = new Set();
    const rvB = new Set();


    let rv = [[],[]];
    for(num of nums1) {
        if(!b.has(num) && !rvA.has(num)) {
            rv[0].push(num);
            rvA.add(num);
        }
    }
    for(num of nums2) {
        if(!a.has(num) && !rvB.has(num)) {
            rv[1].push(num);
            rvB.add(num);
        }
    }
    return rv;
};