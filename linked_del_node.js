/*
237. Delete Node in a Linked List
https://leetcode.com/problems/delete-node-in-a-linked-list/
https://www.youtube.com/watch?v=ik44BcorbjE&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
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
}

function printNodes(node) {
    let cur_node = node;
    while (cur_node) {
        console.log(cur_node.val);
        cur_node = cur_node.next;
    }
}



const delNode = node => {
    let next = node.next.next;
    node.val = node.next.val;
    node.next = next;
}

const slist = new SingleLinked();
slist.addAtHead(4);
slist.addAtHead(5);
slist.addAtHead(1);
slist.addAtHead(9);

console.log(printNodes(slist.head));