"use strict";
class NewPerson {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hello iam ${this.name} ${this.age}yrs old and i love ${this.hobbies.join(",")}`;
    }
}
const p1 = new NewPerson("Akshay", 20, ["writing", "Reading"]);
// short hand property using class
class Vehicle {
    name;
    brand;
    price;
    color;
    constructor(name, brand, price, color) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    info() {
        return `The car name is ${this.name} and its brand is ${this.brand} and price will be ${this.price} and will be in ${this.color} colors`;
    }
}
class HondaCity extends Vehicle {
    spec;
    constructor(name, brand, price, color, spec) {
        super(name, brand, price, color);
        this.spec = spec;
    }
}
const handa = new HondaCity('hondacity', 'honda', 200000, ['red', 'ehite'], 'v8');
console.log(handa.info());
