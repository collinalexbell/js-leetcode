/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // linear time   

  // make room
  for(let i = 0; i < m; i++) {
    nums1[i+m] = nums1[i];
  }

  mi = m;
  ni = 0;
  i = 0;

  while(i < n+m) {
    if(!(mi < n+m)) {
      nums1[i] = nums2[ni];
      ni++;
    }
    else if(!(ni < n)) {
      nums1[i] = nums1[mi];
      mi++;
    }
    else if(nums1[mi] < nums1[ni]) {
      nums1[i] = nums1[mi];
      mi++;
      } else {
        nums1[i] = nums2[ni];
        ni++;
      }
    i++;
  }
};
