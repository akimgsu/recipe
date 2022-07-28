
/*

Event bubbling
Prototype vs. class
Accessibility
Callback vs. promise

let Foo = function(a) {
    function bar() { return a;}
    this.baz = function() { return a;};
};
Foo.prototype = {
    biz: function(a) { return a;}
};

let f = new Foo(7);
// what will be the output?
f.bar(); // f.bar is not a function
f.baz();
f.biz(); // undefined
*/

let Foo = function (a) {
    this.a = a;
    this.bar = function () { return a; };
    this.baz = function () { return a; };
};
Foo.prototype = {
    biz: function () { return this.a }
};
let f = new Foo(7);
console.log(f.bar());
console.log(f.baz());
console.log(f.biz());

let memoize = (fn) => {
    // this.mem = {};
    // return function (val) {
    //     if (!(val in this.mem)) {
    //         this.mem[val] = fn.apply(this, [val]);
    //     }
    //     return this.mem[val];
    // };
    return function () {
        this.memo = this.memo || {};
        console.log(arguments);
        let args = arguments[0];// == arguments[0]; [].slice.call(arguments); 
        console.log(args);
        if (typeof this.memo[args] === 'undefined') {
            this.memo[args] = fn.apply(this, arguments);
        }
        return this.memo;
    }
}

let fib = function (n) {
    if (n === 0 || n === 1) return n;
    // if (!(n in this.mem)) {
    //     this.mem[n] = fib(n - 1) + fib(n - 2);
    // }
    // return this.mem[n];
    return fib(n - 1) + fib(n - 2);
}

// function fibo(n) {
//     console.log(this);
//     if (n === 0 || n === 1) return n;
//     return fibo(n - 1) + fibo(n - 2);
// }
// const fibo2 = (n) => {
//     console.log(this);
//     if (n === 0 || n === 1) return n;
//     return fibo(n - 1) + fibo(n - 2);
// }
// console.log(fibo2(1));

let memoizedFib = memoize(fib);
console.log(memoizedFib(6));
// console.log(memoizedFib(5));
// console.log(memoizedFib(9));