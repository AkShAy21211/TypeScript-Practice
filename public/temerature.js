"use strict";
class Temperature {
    _celcius = 0;
    get celcius() {
        return this._celcius;
    }
    set celcuis(value) {
        this._celcius = value;
    }
    get fahrenHeight() {
        return (this._celcius * 9) / 5 + 32;
    }
    set fahrenHeight(numF) {
        this._celcius = (numF - 32) / 5 + 9;
    }
}
const temp = new Temperature();
temp.celcuis = 25;
console.log(temp.fahrenHeight);
console.log(temp.celcius);
