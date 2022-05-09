'use strict';
/*
oop
class: template
object: instance of a class
Javascript class
    - introduced in ES6
    - syntactical sugar over prototype-based inheritance
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`My name is ${this.name} and age is ${this.age}.`);
    }
}
const woo = new Person('woo', 20);
woo.speak();
// 2. getter & setter
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const u_woo = new User('woo', -10);
console.log(u_woo.age);
// 3. Fields public & private
class Experiment {
    publicField = 2;
    #privateField = 0;
}
// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
}
console.log(Article.publisher);
// 5. Inheritance: a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() { console.log("draw Shape") }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape { }
const rec = new Rectangle(20, 10, 'blue');
rec.draw();
console.log(rec.getArea());
class Triangle extends Shape {
    constructor(width, height, color, message) {
        super(width, height, color);
        this.message = message;
    }
    draw() {
        super.draw();
        console.log("new draw!")
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const tri = new Triangle(20, 10, 'red', 'it is super');
tri.draw();
console.log(tri.getArea());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference