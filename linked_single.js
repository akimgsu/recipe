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
slist.addBack(3);
slist.addBack(4);
printNodes(slist.head);
