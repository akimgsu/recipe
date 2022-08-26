/*
https://leetcode.com/problems/binary-tree-level-order-traversal/#
102. Binary Tree Level Order Traversal
Graph - BFS Breadth First Search
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
// console.log(levelOrder(tree1)); // [ [ 3 ], [ 9, 20 ], [ 1, 15, 7 ] ]
const levelOrderCnt = (root) => {
    if (!root) return [];
    const q = [root];
    const result = [];
    while (q.length) {
        let cnt = q.length;
        let sub = []
        for (let i = 0; i < cnt; i++) {
            const curr = q.shift();
            sub.push(curr.val);
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
        }
        result.push(sub);
        sub = [];
    }
    return result;
}
console.log(levelOrderCnt(tree1)); // [ [ 3 ], [ 9, 20 ], [ 1, 15, 7 ] ]

const levelOrderBasic = (root) => {
    if (!root) return;
    const queue = [root];
    const result = [];
    while (queue.length) {
        const curr = queue.shift();
        result.push(curr.val);
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    }
    return result;
}
// console.log(levelOrderBasic(tree1)); // [ 3, 9, 20, 1, 15, 7 ]