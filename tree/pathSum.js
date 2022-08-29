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
const root = new TreeNode(7);
root.left = new TreeNode(-2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(15);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(-5);

const pathSum = (root, t) => {
    if (!root) return [];
    const res = [];
    const helper = (root, t, sub) => {
        sub.push(root.val);
        if (!root.left && !root.right && root.val === t) {
            res.push([...sub]);
            sub.pop();
            return;
        }
        const newTargetSum = t - root.val;
        if (root.left) helper(root.left, newTargetSum, sub);
        if (root.right) helper(root.right, newTargetSum, sub);
        sub.pop();
    }
    helper(root, t, []);
    return res;
};

console.log(pathSum(root, 20));
