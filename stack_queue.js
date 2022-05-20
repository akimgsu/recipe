/*
232. Implement Queue using Stacks https://leetcode.com/problems/implement-queue-using-stacks/
https://www.youtube.com/watch?v=d0h0E8CuibU&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=3
Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]
Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/
class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }
    push(val) {
        this.pushStack.push(val);
    }
    pop() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack.pop();
    }
    peek() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack[this.popStack.length - 1];
    }
    empty() {
        return !this.pushStack.length && !this.popStack.length;
    }
}
const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
// var MyQueue = function() {};
// MyQueue.prototype.push = function(x) {};
// MyQueue.prototype.pop = function() {};
// MyQueue.prototype.peek = function() {};
// MyQueue.prototype.empty = function() {};