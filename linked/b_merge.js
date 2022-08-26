/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 * 203. Remove Linked List Elements
 */
class ListNode {
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
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(4);
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
// pIter(list2);
const mergeTwoListsIter = (list, list2) => {
    const dummy = new ListNode();
    let curr = dummy;
    while (list && list2) {
        if (list.val <= list2.val) {
            curr.next = list;
            list = list.next;
            curr = curr.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
            curr = curr.next;
        }
    }

    if (list) {
        curr.next = list;
    } else {
        curr.next = list2;
    }
    return dummy.next;
}
const iter = mergeTwoListsIter(list, list2);
pIter(iter);
console.log('=====');

const mergeTwoListsRecur = function (list, list2) {
    if (!list) return list2;
    if (!list2) return list;
    if (list.val <= list2.val) {
        list.next = mergeTwoListsRecur(list.next, list2);
        return list;
    } else {
        list2.next = mergeTwoListsRecur(list, list2.next);
        return list2;
    }
};
// const recur = mergeTwoListsRecur(list, list2);
// pIter(recur);