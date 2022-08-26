/*
https://www.youtube.com/watch?v=RKPCF-hsOPY&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=3
199. Binary Tree Right Side View
https://leetcode.com/problems/binary-tree-right-side-view/
*/

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(4);

const rightSideView = (root) => {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        result.push(queue[queue.length - 1].val);
        while (len--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
}

console.log(rightSideView(tree));