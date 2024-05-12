"use strict";
class PersonNew {
    name;
    static house;
    constructor(name) {
        this.name = name;
    }
    static getHouse() {
        return this.house;
    }
}
PersonNew.house = 'Azhikode';
console.log(PersonNew);
