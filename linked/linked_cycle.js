/*
142. Linked List Cycle II
https://leetcode.com/problems/linked-list-cycle-ii/
https://www.youtube.com/watch?v=hZIZorVvn0M&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=3
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }
    return false;
};

const head_node = new ListNode(3);
head_node.next = new ListNode(2);
head_node.next.next = new ListNode(0);
head_node.next.next.next = new ListNode(-4);
head_node.next.next.next.next = head_node.next;

console.log(hasCycle(head_node));