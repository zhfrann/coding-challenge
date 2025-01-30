// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    let prev1 = 1, prev2 = 2;

    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
};

//* Recursive, O(2^n)
var climbStairs2 = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs2(n - 1) + climbStairs2(n - 2);
};

//* Recursive with memoization, O(n)
var climbStairs3 = function (n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1) return 1;
    if (n === 2) return 2;

    memo[n] = climbStairs3(n - 1, memo) + climbStairs3(n - 2, memo);
    return memo[n];
}