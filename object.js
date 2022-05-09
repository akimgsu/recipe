/*
Objects = {key:value}
*/
// Literals and properties
const obj = {} // object literal
const obj2 = new Object(); // object constructor
console.log(obj, obj2)
const woo = { name: 'woo', age: 20 }
woo.hasJob = true;
console.log(woo);
delete woo.hasJob;
console.log(woo);
// 2. computed properties: string
function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);// dynamic assign
}
printValue(woo, 'name');
// 3. Property value shorthand
const person = { name: 'bod', age: 2 }
const person2 = makePerson('woo', 15);
console.log(person2);
function makePerson(name, age) {
    return {
        name,
        age
    }
}
// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person3 = new Person('test', 9);
console.log(person3)
// 5. in operator: property existence check (key in obj)
console.log('name' in person2);
// 6. for (key in obj) & for (value of array)
// 7. cloning Object.assign()
// old way
// const person4 = new Person('test', 9);
// const person5 = {};
// for (key in person4) {
//     person5[key] = person4[key]
// }
// console.clear();
// person5.name = "kkk"
// console.log(person4, person5);
const person4 = Object.assign({}, person3);
console.log(person3, person4);