/*
https://www.youtube.com/watch?v=k51JOgA0mw0&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz
102. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/#
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.left.right = new TreeNode(1);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

const levelOrder = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));
        while (len--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
}

console.log(levelOrder(tree1));