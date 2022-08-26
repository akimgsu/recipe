/**
 * Tree Traverse: 
 * Preorder:    N L R 
 * Inorder:     L N R    
 * Postorder    L R N
 */
class Tree {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
const node = new Tree(1);
node.left = new Tree(2);
node.right = new Tree(3);
node.left.left = new Tree(4);
node.left.right = new Tree(5);
node.right.left = new Tree(6);
node.right.right = new Tree(7);

const postorderIter = (tree) => {
    const stack = [];
    let visitedNode = null;
    while (true) {
        if (tree) {
            stack.push(tree);
            tree = tree.left;
        } else if (stack.length > 0) {
            const peekNode = stack[stack.length - 1];
            if (peekNode.right && visitedNode !== peekNode.right) {
                tree = peekNode.right;
            } else {
                console.log(peekNode.val);
                visitedNode = stack.pop();
            }
        } else {
            break;
        }
    }
}
postorderIter(node);
const inorderIter = (tree) => {
    const stack = [];
    while (true) {
        if (tree) {
            stack.push(tree);
            tree = tree.left;
        } else if (stack.length > 0) {
            tree = stack.pop();
            console.log(tree.val);
            tree = tree.right;
        } else {
            break;
        }
    }
}
// inorderIter(node);
const preorderIter = (tree) => {
    if (!tree) return;
    const stack = [];
    stack.push(tree);
    while (stack.length > 0) {
        const pop = stack.pop();
        console.log(pop.val);
        if (pop.right) {
            stack.push(pop.right);
        }
        if (pop.left) {
            stack.push(pop.left);
        }
    }
}
// preorderIter(node);
/*
recursive -- call stack frame
*/
const postorderRecur = (node) => {
    if (!node) return;
    postorderRecur(node.left);
    postorderRecur(node.right);
    console.log(node.val);
}
// postorderRecur(node);
const inorderRecur = (node) => {
    if (!node) return;
    inorderRecur(node.left);
    console.log(node.val);
    inorderRecur(node.right);
}
// inorderRecur(node);
const preorderRecur = (node) => {
    if (!node) return;
    console.log(node.val);
    preorderRecur(node.left);
    preorderRecur(node.right);
}
// preorderRecur(node);
