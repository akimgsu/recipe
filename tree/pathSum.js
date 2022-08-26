/*
https://leetcode.com/problems/path-sum-ii/
113. Path Sum II
*/
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
const root = TreeNode(7);
root.left = TreeNode(-2);
root.right = TreeNode(5);
root.left.left = TreeNode(3);
root.left.right = TreeNode(15);
root.right.left = TreeNode(8);
root.right.right = TreeNode(-5);

const pathSum = (root, t) => {

};
