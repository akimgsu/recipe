function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
function ChildNode(val, children) {
    this.val = val;
    this.children = children;
};
/*
https://leetcode.com/problems/binary-tree-level-order-traversal/#
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/
const tree1 = new TreeNode(3)
tree1.left = new TreeNode(9)
tree1.right = new TreeNode(20)
tree1.right.left = new TreeNode(15)
tree1.right.right = new TreeNode(7)
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

/*
https://leetcode.com/problems/binary-tree-right-side-view/#
199. Binary Tree Right Side View
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
*/
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.right = new TreeNode(5);
tree2.right.right = new TreeNode(4);
const rightSideView = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
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
console.log(rightSideView(tree2));
/*
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/#
103. Binary Tree Zigzag Level Order Traversal
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
*/
const zigzag_travel = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    let count = 0;
    while (queue.length) {
        let len = queue.length;
        if (count % 2 === 0) result.push(queue.map(node => node.val));
        else result.push(queue.map(node => node.val).reverse());
        count += 1;
        while (len--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
}
console.log(zigzag_travel(tree1));

/*
https://leetcode.com/problems/n-ary-tree-level-order-traversal/
429. N-ary Tree Level Order Traversal
Given an n-ary tree, return the level order traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal, 
each group of children is separated by the null value (See examples).
Input: root = [1, null, 3, 2, 4, null, 5, 6]
Output: [[1], [3, 2, 4], [5, 6]]
*/
const cNode = new ChildNode(1, []);
cNode.children[0] = new ChildNode(3, []);
cNode.children[1] = new ChildNode(2, []);
cNode.children[2] = new ChildNode(4, []);
cNode.children[0].children[0] = new ChildNode(5, []);
cNode.children[0].children[1] = new ChildNode(6, []);
const n_array = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));
        while (len--) {
            let node = queue.shift();
            for (let child of node.children) {
                queue.push(child);
            }
        }
    }
    return result;
}
console.log(n_array(cNode));
/*
https://leetcode.com/problems/binary-tree-preorder-traversal/#
144. Binary Tree Preorder Traversal
Binary Tree Traversal 
Inorder(Left, Root, Right) 
Preorder(Root, Left, Right) 
Postorder(left, Right, Root) 
Given the root of a binary tree, return the preorder traversal of its nodes' values
Input: root = [1,null,2,3]
Output: [1,2,3]
 */
const tree3 = new TreeNode(1);
tree3.right = new TreeNode(2);
tree3.right.left = new TreeNode(3);
const preorderTraversal = (root) => {
    if (!root) return [];
    const result = [];
    const preorder = (node) => {
        if (!node) return [];
        result.push(node.val);
        if (node.left) preorder(node.left);
        if (node.right) preorder(node.right);
    }
    preorder(root);
    return result;
}
console.log(orderTraversal(tree3));
const tree4 = new TreeNode(1);
tree4.left = new TreeNode(2);
tree4.right = new TreeNode(3);
tree4.left.left = new TreeNode(4);
tree4.left.right = new TreeNode(5);
const inorderTraversal = (root) => {
    if (!root) return [];
    const result = [];
    const inorder = (node) => {
        if (!node) return [];
        if (node.left) inorder(node.left);
        result.push(node.val);
        if (node.right) inorder(node.right);
    }
    inorder(root);
    return result;
}
console.log(inorderTraversal(tree4));


/*
Skyler wants to get auto insurance.When arriving at the insurance company, there are N agents(number 1 to N)
serving nobody, and M people have already arrived with the same demand.The company follows the rule of first
arrived first served, and if more than 2 agents can serve a customer at the same time, the customer will
always choose the one with the smallest number.For agents, each of them has a constant serving time that
the ith agent will take T[i] minutes to serve a customer.Assume Skyler arrived at time 0, and all the agents
are idle and start to serve the customers.

The question is how many minutes will Skyler needs to wait before meeting with an agent ?

    M = 100
N = 4

T
[2, 4, 3, 1]

A B C D
    * * * *

    1st customer arrived
They will take agent D 1
2nd customer arrived
They will take agent A 2

...

5th customer arrived, waited for 1 min.Take agent D 1.


const waitTime = (m, n, T) => {
    let result = 0;

    return result;
}


Imagine we are building a new web UI and need a TreeOutline component.This can be used to render structured tree data that the
user can navigate - for example, a folder / file structure like you might see in your code editor:

- src /
    - app.js
    - main.js
    - img /
    - logo.png
    - public /
    - index.html
    - favicon.ico
Each TreeNode has some data associated with it(for the folder structure, it will be the name of the folder / file that node
represents), and can optionally have child nodes associated.For example, the node representing the public folder has two
child nodes: index.html and favicon.ico.A tree also may have many top level nodes(in this example there are two - src / and public /).

Create a component that takes in the tree as a property and renders it as HTML to the user.We can decide and control the exact
structure of the tree and how it is provided to us by the caller.

class Node {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
}
const tree = new Node('public', children);
tree.children = new Node('index.html', children);

const render = (tree) => {
    if (!tree) return null;
    const queue = [tree];
    while (queue.length) {

    }
}
*/