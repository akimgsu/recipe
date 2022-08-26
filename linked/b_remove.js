/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 * 203. Remove Linked List Elements
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const pIterate = (nodes) => {
    let cur = nodes;
    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    }
}

const li = new ListNode(1);
li.next = new ListNode(2);
li.next.next = new ListNode(6);
li.next.next.next = new ListNode(3);
li.next.next.next.next = new ListNode(4);
li.next.next.next.next.next = new ListNode(5);
li.next.next.next.next.next.next = new ListNode(6);
pIterate(li);
console.log('--------------');

const recur = (node, data) => {
    if (!node) return;
    const nextNode = recur(node.next, data);
    if (node.val === data) {
        return nextNode;
    } else {
        node.next = nextNode;
        return node;
    }
}
// pIterate(recur(li, 6));

const iter = (node, data) => {
    const dummy = new ListNode(0);
    dummy.next = node;
    let cur = node;
    let prv = dummy;
    while (cur) {
        if (cur.val === data) {
            prv.next = cur.next;
            cur = cur.next;
        } else {
            cur = cur.next;
            prv = prv.next;
        }
    }
    return dummy.next;
}
pIterate(recur(li, 6));



const removeElements = function (nodes, val) {
    let cur = nodes;
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return nodes;
};

// const test = removeElements(li, 6);
// pIterate(test);

