/*
20. Valid Parentheses https://leetcode.com/problems/valid-parentheses/#
https://www.youtube.com/watch?v=HhBo1fckgBM&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=9
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Input: s = "()"
Output: true
*/
const isValid = (s) => {
    const stack = [];
    const parens = '() {} []';
    let i = 0;
    while (i < s.length) {
        stack.push(s[i])
        i++;
        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];
        let patParens = open + closed;
        if (parens.includes(patParens)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}
console.log(isValid('[()]'));

/*
71. Simplify Path https://leetcode.com/problems/simplify-path/#
https://www.youtube.com/watch?v=DsnvC_4T_7Y&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=8
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.
In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.
The canonical path should have the following format:
The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.
*/
const simplifyPath = (path) => {
    const stack = [];
    let pathArr = path.split('/').filter(el => el !== '.').filter(el => el !== '');
    for (let name of pathArr) {
        if (name === '..') {
            stack.pop();
        } else {
            stack.push(name);
        }
    }
    return '/' + stack.join('/');
}
/*
150. Evaluate Reverse Polish Notation https://leetcode.com/problems/evaluate-reverse-polish-notation/#
https://www.youtube.com/watch?v=3IO_134DZYA&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=7
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
Note that division between two integers should truncate toward zero.
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
*/
const evalRPN = (tokens) => {
    const stack = [];
    const operators = {
        '+': (num, num2) => num + num2,
        '-': (num, num2) => num - num2,
        '*': (num, num2) => num * num2,
        '/': (num, num2) => Math.trunc(num / num2)
    }
    for (let token of tokens) {
        if (operators[token]) {
            let num2 = stack.pop();
            let num = stack.pop();
            stack.push(operators[token](num, num2))
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop();
}
console.log(evalRPN(["4", "13", "5", "/", "+"]));
/*
146. LRU Cache :https://leetcode.com/problems/lru-cache/#
https://www.youtube.com/watch?v=3Z9G5qRmI-I&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=5
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity
Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
*/
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (this.map.has(key)) {
            let val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        } else {
            return -1;
        }
    }
    put(key, val) {
        if (this.get(key) === -1) {
            if (this.capacity === this.map.size) {
                for (let keyVal of this.map) {
                    this.map.delete(keyVal[0]);
                    break;
                }
            }
        }
        this.map.set(key, val);
    }
}
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
class Queue225 {
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
        console.log(this.popStack, '====', this.pushStack)
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

/*
1762 https://leetcode.com/problems/buildings-with-an-ocean-view/
https://www.youtube.com/watch?v=2WJtUacFMpg&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=2
O(n): T, O(n): S
*/
const findBuildings = (heights) => {
    const start = heights.length - 1;
    const result = [start];
    for (let i = heights.length - 2; i >= 0; i--) {
        let curBuilding = heights[i];
        let lastBuilding = heights[result[result.length - 1]];
        if (curBuilding > lastBuilding) {
            result.push(i)
        }
    }
    return result.reverse();
}
console.log(findBuildings([7, 1, 5, 3, 6, 4]))
/*
https://www.youtube.com/watch?v=i8HjeyMvB5c&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY
21. Best Time to Buy and Sell Stock https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
const maxProfit = (prices) => {
    let sellIdx = prices.length - 1;
    let profit = 0;
    for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];
        if (buyVal - sellVal >= 0) {
            sellIdx = buyIdx;
        } else {
            let price = sellVal - buyVal;
            profit = Math.max(profit, price);
        }
    }
    return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
