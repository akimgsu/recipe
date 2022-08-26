/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * 876. Middle of the Linked List
 */
class LinkedNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const pIter = (node) => {
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}
const ll = new LinkedNode(1);
ll.next = new LinkedNode(2);
ll.next.next = new LinkedNode(3);
ll.next.next.next = new LinkedNode(4);
ll.next.next.next.next = new LinkedNode(5);

const middleNode = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

const middleNodeCnt = (head) => {
    let cnt = 0;
    let counter = head;
    while (counter) {
        cnt++;
        counter = counter.next;
    }
    let mid = Math.floor(cnt / 2);
    for (let i = 0; i < mid; i++) {
        head = head.next;
    }
    return head;
}
// middleNodeCnt(ll);
