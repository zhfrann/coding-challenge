// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
//        1         //* This is symmetric tree
//      /   \
//     2     2
//    / \   / \
//   3   4 4   3
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;

    let stackL = [root.left], stackR = [root.right];
    let pointerL, pointerR;

    while (stackL.length && stackR.length) {
        pointerL = stackL.pop();
        pointerR = stackR.pop();

        if (pointerL === null && pointerR === null) continue;

        if ((pointerL === null || pointerR === null) || pointerL.val !== pointerR.val) return false;

        stackL.push(pointerL.right)
        stackL.push(pointerL.left)

        stackR.push(pointerR.left)
        stackR.push(pointerR.right)
    }

    return true;
};

var isSymmetric = function (root) {
    if (root === null) return true;

    function isMirror(treeLeft, treeRight) {
        if (treeLeft === null && treeRight === null) return true;
        if ((treeLeft === null || treeRight === null) || treeLeft.val !== treeRight.val) return false;

        return isMirror(treeLeft.left, treeRight.right) && isMirror(treeLeft.right, treeRight.left)
    }

    return isMirror(root.left, root.right)
};
