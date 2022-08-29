/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * 543. Diameter of Binary Tree
 */
class TreeNode {
    constructor(v, l, r) {
        this.val = v === undefined ? 0 : v;
        this.left = l === undefined ? null : l;
        this.right = r === undefined ? null : r;
    }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.left.left.right = new TreeNode(6);
// root.left.left.right.left = new TreeNode(8);
// root.left.right.right = new TreeNode(7);
// root.left.right.right.right = new TreeNode(9);

const diameterOfBinaryTree = (root) => {
    let diameter = 0;
    const helper = (root) => {
        let leftDepth = 0;
        let rightDepth = 0;
        if (root.left) leftDepth = helper(root.left);
        if (root.right) rightDepth = helper(root.right);
        // update diameter at every node
        diameter = Math.max(diameter, leftDepth + rightDepth);
        return 1 + Math.max(leftDepth, rightDepth);
    }
    helper(root);
    return diameter;
};
console.log(diameterOfBinaryTree(root));