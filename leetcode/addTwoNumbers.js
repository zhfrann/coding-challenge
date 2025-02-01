// You are given two non-empty linked lists representing two non-negative integers. The digits are stored 
// in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the 
// sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const arr1 = [], arr2 = [];

    while (l1 != null) {
        arr1.unshift(l1.val);
        l1 = l1.next;
    }

    while (l2 != null) {
        arr2.unshift(l2.val);
        l2 = l2.next;
    }

    let num1 = BigInt(arr1.join(""));
    let num2 = BigInt(arr2.join(""));
    const numResult = (num1 + num2).toString().split("").map(Number);

    let result = new ListNode(0);
    let current = result;
    for (let i = numResult.length - 1; i >= 0; i--) {
        current.next = new ListNode(numResult[i]);
        current = current.next;
    }

    return result.next;
};

//* Alternative solution
var addTwoNumbers2 = function (l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        current.next = new ListNode(sum % 10);
        current = current.next;

        carry = Math.floor(sum / 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};