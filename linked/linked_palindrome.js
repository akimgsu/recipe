/*
234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/
https://www.youtube.com/watch?v=X2R2VZjKqi8&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=7
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

const reverse = head => {
    let cur = head;
    let prev = null;
    let next;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

const isPalindrome = head => {
    let fast = head;
    let slow = head;
    let startPointer = head;
    let length = 0;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }
    let mid = reverse(slow);

    while (length) {
        length--;
        if (mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }
    return true;
}

class ListNode {
    constructor(data) {
        this.data = data;
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

const slist = new SingleLinked();
slist.addAtHead(1);
slist.addAtHead(2);
slist.addAtHead(2);
slist.addAtHead(1);

const rev = isPalindrome(slist.head);