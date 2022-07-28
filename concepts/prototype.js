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

let memoizedFib = memoize(fib);
console.log(memoizedFib(7));


function Foo(n) {
    this.n = n;
    this.bar = function () { return n };
    this.baz = function () { return n };
};
Foo.prototype = {
    biz: function () { return this.n }
};
let foo = new Foo(1);
// console.log(foo.bar(), foo.baz(), foo.biz());

const car = function () {
    this.wheels = 4,
        this.drive = function () {
            console.log('drive..');
        }
}
const bmw = { color: 'Red', navi: 2 };
bmw.__proto__ = new car();
const x5 = function () {
    this.color = "color";
    this.name = "x5"
}
x5.__proto__ = bmw
for (const p in x5) { console.log(p); }

const benz = function (color) { this.color = color };
benz.prototype.wheels = 4;
benz.prototype.drive = function () {
    console.log("driving benz");
}
const bs = new benz("Silver");



