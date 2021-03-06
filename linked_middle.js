/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

