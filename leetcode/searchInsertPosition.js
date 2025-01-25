// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4


// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums contains distinct values sorted in ascending order.
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1, mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

//* Time complexity (worst) = O(n). 
var searchInsert2 = function (nums, target) {
    let result;

    for (let i = 0; i < nums.length; i++) {
        result = i;

        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
};