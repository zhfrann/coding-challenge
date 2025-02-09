function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function preorderTraversal(root) {
    if (!root) return [];
    let stack = [root], result = [];

    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}

function inorderTraversal(root) {
    let stack = [], result = [];

    while (stack.length || root !== null) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);

        current = current.right;
    }

    return result;
}

function postorderTraversal(root) {
    if (!root) return [];
    let stack = [root], result = [];

    let visited = new Set();
    while (stack.length) {
        let node = stack[stack.length - 1];

        if (node.left && !visited.has(node.left)) {
            stack.push(node.left);
        } else if (node.right && !visited.has(node.right)) {
            stack.push(node.right);
        } else {
            result.push(node.val);
            visited.add(node);
            stack.pop();
        }
    }

    return result;
}

// Contoh penggunaan:
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log("Preorder:", preorderTraversal(root)); // Output: [1, 2, 3]
console.log("Inorder:", inorderTraversal(root));  // Output: [1, 3, 2]
console.log("Postorder:", postorderTraversal(root)); // Output: [3, 2, 1]
