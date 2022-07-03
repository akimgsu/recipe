/*
https://www.youtube.com/watch?v=RKPCF-hsOPY&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=2
107. Binary Tree Level Order Traversal II
https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
*/


class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.left.right = new TreeNode(1);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

const levelOrderReverse = (root) => {
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
    return result.reverse();
};

console.log(levelOrderReverse(tree));