/*
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/
https://www.youtube.com/watch?v=DT3KOnLWR_o&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = head => {

    let cur = head;
    let prev = null;
    let next = null;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printNodes(node) {
    let cur_node = node;
    while (cur_node) {
        console.log(cur_node.data);
        cur_node = cur_node.next;
    }
}


class SingleLinked {
    constructor() {
        this.head = null;
    }

    addAtHead(val) {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
    }

    addBack(val) {
        const node = new ListNode(val);
        let cur_node = this.head;
        while (cur_node.next) {
            cur_node = cur_node.next;
        }
        cur_node.next = node;
    }
}

const slist = new SingleLinked();
slist.addAtHead(1);
slist.addAtHead(2);
slist.addAtHead(3);
slist.addAtHead(4);
slist.addAtHead(5);

printNodes(slist.head);
const rev = reverseList(slist.head);
console.log(printNodes(rev));

