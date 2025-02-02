// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median 
// of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -10^6 <= nums1[i], nums2[i] <= 10^6

//! This answer have O((m+n) log(m+n)) for the time complexity

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums2.forEach(num => nums1.push(num));
    nums1.sort((a, b) => a - b);
    let median = Number.POSITIVE_INFINITY;

    if (nums1.length % 2 == 0) {
        median = (nums1[(nums1.length / 2) - 1] + nums1[nums1.length / 2]) / 2;
    } else {
        median = nums1[Math.floor(nums1.length / 2)];
    }

    return median;
};