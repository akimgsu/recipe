/*
155. Min Stack
https://leetcode.com/problems/min-stack/
https://www.youtube.com/watch?v=U62PyNFfBGE&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=6
*/
class Stack {
    constructor() {
        this.stack = [];
        this.min = [];
        this.max = []
    }
    push(val) {
        if (!this.stack.length) {
            this.stack.push(val);
            this.min.push(val);
            this.max.push(val)
        } else {
            this.stack.push(val);
            this.min.push(Math.min(this.min[this.min.length - 1], val));
            this.max.push(Math.max(this.max[this.max.length - 1], val));
        }
    }
    pop() {
        if (!this.stack.length) return null;
        this.min.pop();
        this.max.pop();
        return this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.min.length - 1];
    }

    getMax() {
        return this.maxStack[this.max.length - 1];
    }
}
const obj = new Stack();
[1, 3, 3, 2, 2, 5, 0].map((el) => obj.push(el));
console.log(obj.pop());
console.log(obj);



const StackFunc = function () {
    this.stack = [];
    this.min = []
    this.max = [];
};

StackFunc.prototype.push = function (val) {
    if (!this.stack.length) {
        this.stack.push(val);
        this.min.push(val);
        this.max.push(val);
    } else {
        this.stack.push(val);
        this.max.push(Math.max(this.max[this.max.length - 1], val));
        this.min.push(Math.min(this.min[this.min.length - 1], val));
    }
};
StackFunc.prototype.pop = function () {
    if (!this.stack.length) return null;
    this.min.pop();
    this.max.pop();
    return this.stack.pop();
};
StackFunc.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};
StackFunc.prototype.getMin = function () {
    return this.min[this.min.length - 1];
};
StackFunc.prototype.getMax = function () {
    return this.max[this.max.length - 1];
};
const sf = new StackFunc();
[1, 3, 3, 2, 2, 5, 0].map((el) => sf.push(el));
console.log(sf.pop());
console.log(sf);

