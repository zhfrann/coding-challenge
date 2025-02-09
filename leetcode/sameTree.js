// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// Constraints:
// The number of nodes in both trees is in the range [0, 100].
// -10^4 <= Node.val <= 10^4

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//* This solution using pre-order traversal (DFS)

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let stack = [[p, q]];

    while (stack.length > 0) {
        let [node1, node2] = stack.pop();

        if (node1 === null && node2 === null) continue;
        if (node1 === null || node2 === null || node1.val !== node2.val) return false;

        stack.push([node1.left, node2.left]);
        stack.push([node1.right, node2.right]);
    }

    return true;
};

var isSameTree2 = function (p, q) {
    if (p === null && q === null) return true;
    if ((p === null || q === null) || p.val !== q.val) return false;

    return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right)
};