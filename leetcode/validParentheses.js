// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true


// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;

    const stack = [];
    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char)
        } else {
            if (
                (char === ")" && stack[stack.length - 1] === "(") ||
                (char === "}" && stack[stack.length - 1] === "{") ||
                (char === "]" && stack[stack.length - 1] === "[")
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return (stack.length === 0)
};

console.log(isValid("()")) // True
console.log(isValid("()[]{}")) // True
console.log(isValid("(]")) // False
console.log(isValid("([])")) // True
console.log(isValid("([)]")); // false
console.log(isValid("(])")); // false