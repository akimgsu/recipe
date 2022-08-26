class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);

const printIterative = (node) => {
    let currNode = node;
    while (currNode) {
        console.log(currNode.data);
        currNode = currNode.next;
    }
}
// printIterative(ll);
const printRecur = (node) => {
    console.log(node.data);
    if (node.next !== null)
        printRecur(node.next);

}
// printRecur(ll);

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

    findNode(val) {
        let cur_node = this.head;
        while (cur_node) {
            if (cur_node.data === val) {
                return cur_node;
            }
            if (cur_node.next === null) throw new Error('No data');
            cur_node = cur_node.next
        }
    }

    addAfter(nodeName, val) {
        const node = new ListNode(val);
        node.next = nodeName.next;
        nodeName.next = node;
    }

    deleteAfter(prvNode) {
        if (prvNode.next)
            prvNode.next = prvNode.next.next;
    }
}

const slist = new SingleLinked();
slist.addAtHead(1);
slist.addAtHead(2);
// slist.addAtHead(3);
// slist.addAtHead(4);
// slist.addAtHead(5);
slist.addBack(3);
// slist.addBack(4);
// printIterative(slist.head);
const node1 = slist.findNode(1);
slist.addAfter(node1, 5);
printIterative(slist.head);
