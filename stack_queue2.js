/*
225. Implement Stack using Queues https://leetcode.com/problems/implement-stack-using-queues/
https://www.youtube.com/watch?v=G5So-9Vw1fo&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=4
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]
Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (!this.size) return null;
        let node = this.head;
        this.head = this.head.next;
        node.next = null;
        this.size--;
        return node.val;
    }
    peek() {
        return this.head.val;
    }
    empty() {
        return this.size === 0;
    }
}