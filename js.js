/*
First-class function: function are treated like any other variable:
    can be assigned as a value to variable
    can be passed as an argument to other functions
    can be returned by another function
Function declaration / hoisting
    function test(){ return ""}
Function expression
    anonymous function
    const printYes = function () {return ""}
    const printYes = () => {return ""}
    named function : better debugging stack traces, recursions
    const printYes = function print() {return ""}
IIFE: Immediately Invoked Function Expression
    ()()
*/

/*
var, let, const  are hoisting  
Using variable processing 1. Declaration  2. Initialization 3.Allocation 
Temporal Dead Zone makes the variable different. 
var is function-scoped 
let, const are block-scoped: function, if, while, try/catch, for etc
*/
// literal object
let user_mike = { name: 'Woo', age: 30 }
// constructor function
function User(name, age) { this.name = name; this.age = age }
const user1 = new User('Mike', 30);
const user2 = User('Kal', 50); // undefined
// Computed property
let a = 'age';
const user = { name: 'Sue', [a]: 25 }; // { ['na'+'me']: 'Sue', [30/6]: 25 };
console.log(user);
// Object.assign() : copy object
// Object.keys() : return keys in array 
// Object.values() : return values in array 
// Object.entries() : return keys, values in array 
// Object.fromEntries(arr) : make object from [keys, values] array
const cloneUser = user; // user & cloneUser refference same object. 
const newUser = Object.assign({}, user);
// Symbol - unique
const id = Symbol('id'); // id.description;
const emp = { name: 'Ted', age: 20, [id]: 'empId' }
Object.keys(emp); // ["name", "age"] symbol(s) are not exist.
// Symbol.for(); global symbol sharing key
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
id1 === id2; // true
// ways to check Symbole key
/*
Object.getOwnPropertySymbols(user);
Reflect.ownKeys(user);
toString()
let num = 10;
num.toString(16);
Math.ceil();
Math.floor()
Math.round();
Math.random();
toFixed(); // float number
isNan();
parseInt(); let redColor = 'f3'; parseInt(redColor, 16);
let str = 'abcdefg';
str.indexOf('a') // -1 str.include()
str.slice(2, -2) //'cde' 
str.substring() // negative value is 0 
str.substr(n, m) // start n and pick m, allow negative value
'a'.codePointAt(0) // 97 
String.fromCodePoint(97) // 'a' 
*/
/* 
Array
    push() insert end, 
    op() delete end, 
    unshift() insert front, 
    shift() delete front
    splice(n(start),m(number)) return deleted elements,
        let arr = [1,2,3,4,5];
        arr.splice(1,2) // [1,4,5] 
    splice(n,m,x) return deleted elements and insert x
    let arr = [1,2,3,4,5];
        arr.splice(1, 3, 100, 200) // [1, 100, 200, 5] 
        arr.splice(1, 0, 1000 ) // [1, 1000. 100, 200, 5] 
    slice(n,m) // preserve original
        let arr = [1,2,3,4,5]; 
        arr.slice(1,4) // [2,3,4]
    concat(): added array
    forEach((name,idx))
        let users = ['Jim', 'Bob'];
        let userObj = {}
        users.forEach( (item, index, arr ) => {
            userObj[index+1] = item;
        })
    indexOf() 
    lastIndexOf()
    includes() return bool
        let arr = [1,2,3]
        arr.includes(2); // true
        arr.includes(8); // false   
    find(fn): return first value as true if did not have return undefined 
        let arr = [1,2,3,4,5];
        const result = arr.find((item) => {
            return item item % 2 === 0;
        }); // result is 2
    findIndex(fn)
        let userList = [
            {name: "Tom", age: 30},
            {name: "Jim", age: 20},
            {name: "Sean", age: 10}
        ]
        const result = userList.findIndex((user) => {
            if (user.age < 19){
                return true;
            } else {
                return false;
            }
        }) // result index is 2
    filter(): return every elements in array
    reverse()
    map(fn): return new array
        let userList = [
            {name: "Tom", age: 30},
            {name: "Jim", age: 20},
            {name: "Sean", age: 10}
        ]
        let newUsrList = userList.map((user, index) => {
            return Object.assign({}, user, {
                id: index +1,
                isAdult: user.age > 19
            })
        })
    join() vs split()
    Array.isArray()
    sort(fn)
        let arr = [4, 1,2,3]
        arr.sort((a,b) => {
            return a-b;
        })
    reduce(fn)
        let arr = [4, 1,2,3]
        const result = arr.reduce((pre, cur) => {
            return prev + cur;
        }, 0);
        let userList = [
            {name: "Tom", age: 30},
            {name: "Jim", age: 20},
            {name: "Sean", age: 10}
        ]
        const result = arr.reduce((pre, cur) => {
            if (cur.age > 19){
                prev.push(cur.name)
            }
            return prev;
        }, []);
*/
/*
Destructuring assignment. 
    let de_users = ['a', 'b', 'c']
    let [u1, u2] = de_users; // let u1 = de_users[0], let u2 = de_users[1] 
    let [a, b, c] = [1, 2]; // c is undefined
    let [a=0, b=0, c=0] = [1,2]
    let de_user = { name: 'Mike', age: 20 }
    let { name, age } = de_user;
    let { name: deUser, age: deAge } = de_user;
*/
/*
anonymous 
    const f = function () { return ""}
Decorative
    function f () {return ""}
arguments vs Rest parameters
parameter valuable
    const f = function (...params){console.log(params)} // array 
... operator
    const f = function (a, b, c){ console.log(a,b,v) }
    const a = [1 ,2, 3]
    f(...a) ;
arguments : length/index & Array type object but no array internal methods. (foreach map)
    function showName(name) {
        console.log(arguments.length);
    }
    showName('1', '2', '3');
Rest parameters are array
    function showNameR(...name) {
        console.log(arguments.length);
    }
    showNameR('1', '2', '3');
    function User(name, age, ...skills){
        this.name = name,
        this.age = age,
        this.skills = skills
    }
    const user1 = new User("Mike", 30, "html", "css");

Spread syntax = object.assign
    let arr = [1,2,3]
    let arr2 = [...arr] // [1,2,3]
    let user = { name: "Mike", age =30}
    let user2 = {...user} // equal to assign
    let sp_user = { name: "Tom" };
    let sp_infor = { age: 30 };
    let sp_fe = ['js', 'java'];
    let sp_lang = ['Kor', 'Eng'];
    let sp_combine = { ...sp_user, ...sp_infor, skills: [...sp_fe, ...sp_lang] }
    console.log(sp_combine)
*/
/*
Closure: Lexical Environment, 함수와 렉시컬 환경의 조합.
    function makeCounter() {
        let num = 0; // encapturation
        return function () { return num++; }
    }
    let counter = makeCounter();
    console.log(counter()); // 0
    console.log(c_counter()); // 1
*/
/*
setTimeout vs setInterval
    const tId = function t_showName(name) {
        console.log(name);
    }
    const tId = setTimeout(t_showName, 1000, 'Tom');
    const setId = setInterval(t_showName, 1000, 'Tom')
    clearTimeout(tId);
*/
/*
call, apply, bind -> we can assign this
call parameter will be values and apply will be array
    const mike = { name: 'Mike' }
    const tom = { name: 'Tom' }
    function showThisName() { console.log(this.name) }
    showThisName() // call Window object
    showThisName.call(mike);
    function thisUpdate(birthY, occupation) {
        this.birthY = birthY;
        this.occupation = occupation;
    }
    thisUpdate.call(mike, '2004', 'Developer');
    console.log(mike);
apply parameter will be array.
    thisUpdate.apply(tom, ['2000', 'Software']);
    console.log(tom);
    const nums = [3 , 10, 2, 7, 55];
    const minNum = Math.min.apply(null, nums)
    const maxNum = Math.min.call(null, ...nums)
bind: binding with method and object
    const mike = {name='Mike'}
    function update(age){this.age = age}
    const updateMike = update.bind(mike);
    
*/
/*
Inheritance & prototype
    const car = {
        wheels: 4, drive() {
            console.log('drive..');
        }
    }
    const bmw = { color: 'Red', navi: 2 };
    bmw.__proto__ = car;
    for (const p in bmw) {
        // use hasOwnProerties
        console.log(p);
    }
    const x5 = {
        color:"color",
        name: "x5"
    }
    x5.__proto__ = bmw
    for (const p in x5) {
        console.log(p);
    }
    const benz = function (color) { this.color = color };
    benz.prototype.wheels = 4;
    benz.prototype.drive = function (){
        console.log("drive...")
    }
    const x5 = new benz("Silver");
    console.log(benz);
    console.log(x5);
    for (const p in x5) {
        // use hasOwnProerties
        console.log(p);
    }
    const audi = function (color) {
        const c = color;
        this.getColor = () => {
            console.log(c)
        }
    }
    const a6 = new audi("red");
    a6.getColor();
*/

/*
class ES 6 class cannot use without new, constructor indicates class, for in statement shows only properties
    const UserFunc = function (name, age) {
        this.name = name;
        this.age = age;
        // this.showName = function (){
        //     console.log(this.name)
        // }
    }
    UserFunc.prototype.showName = function () { console.log(this.name) };
    const func_mike = new UserFunc('Mike', 30);
    console.log(func_mike);
    class UserClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        showName() { console.log(this.name) };
    }
    const c_tom = new UserClass('Tom', 30);
    console.log(c_tom);
inheritance
    class Car {
        constructor(color){
            this.color = color;
            this.wheels = 4;
        }
        drive() {
            console.log("drive");
        }
        stop() {
            console.log("stop");
        }
    }
    class Bmw extends Car{
        constructor(color){
            super(color);
        }
        park(){
            console.log("park")
        }
    }
    const z5 = new Bmw("blue");
*/

/*
promise & race
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => { reject('OK') }, 1000);
    });
    pr.then(
        function (result) {
            console.log(result + 'good');
        }
    ).catch(
        function (err) {
            console.log('please order again')
        }
    ).finally(() => console.log('Done'));
callback
    const test = function (cb) {
        for (let i =0; i < 5; i++){
            cb(i)
        }
    }
    const f = function(value){
        console.log(`hi ${value}`)
    }
    test(f)
    const test = function (arr, cb) {
        for (const i of arr){
            cb(i)
        }
    }
    const f = function(value){
        console.log(`hi ${value}`)
    }
    test([10,5,4], f)
    const f1 = (cb) => {
        setTimeout(() => {
            console.log("f1 finished");
            cb()
        }, 1000);
    }
    const f2 = (cb) => {
        setTimeout(() => {
            console.log("f2 finished");
            cb()
        }, 3000);
    }
    const f3 = (cb) => {
        setTimeout(() => {
            console.log("f3 finished");
            cb()
        }, 2000);
    }
    console.log("start");
    f1(() => {
        f2(() => {
            f3(() => {
                console.log("done");
            })
        })
    });
promise
    const f1 = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("f1 finished");
            }, 1000);
        })
    }
    const f2 = (message) => {
        console.log(message);
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("f2 finished");
            }, 3000);
        });
    }
    const f3 = (message) => {
        console.log(message);
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("f3 finished");
            }, 2000);
        });
    }
    console.log("start");
    f1()
    .then(res => f2(res))
    .then(res => f3(res))
    .then(res => console.log(res));
Promise.all
    console.time("x");
    Promise.all([f1(), f2(), f3()]).then(res => {
        console.log(res);
        console.timeEnd("x");
    })
Promise.race
    console.time("x");
    Promise.race([f1(), f2(), f3()]).then(res => {
        console.log(res);
        console.timeEnd("x");
    })
async / await use try catch
    async function getName(){
        return "Mike";
    }
    getName().then(name => {
        console.log(name)
    })
    const asyncTemp = async () => {
        return Promise.resolve("Woo")
    }
    asyncTemp().then(name => {
        console.log(name)
    })
await    
    const f1 = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("f1 finished");
            }, 1000);
        })
    }
    const f2 = (message) => {
        console.log(message);
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("f2 finished");
            }, 3000);
        });
    }
    const f3 = (message) => {
        console.log(message);
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("f3 finished");
            }, 2000);
        });
    }
    async function order() {
        try{
            const result1 = await f1();
            const result2 = await f2(result1);
            const result3 = await f3(result2);
            console.log(result3);
            const allResult = await Promise.all([f1(),f2(),f3()])
        }catch(e){
            console.log(e);
        }
        console.log("Done");
    }

// generator next() return() throw()
function* ge_fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
    return "finish";
}
// ßconst a = ge_fn();

// https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=5905s