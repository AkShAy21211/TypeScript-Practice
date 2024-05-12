"use strict";
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(val) {
        if (val < 0) {
            throw new Error('Invalid balance');
        }
        this._balance = val;
    }
}
const b1 = new BankAccount();
class Temperature {
    _celciud = 0;
    get celcius() {
        return this._celciud;
    }
    set celcius(val) {
        this._celciud = val;
    }
    get farhenheight() {
        return (this._celciud * 9) / 5 + 32;
    }
    set farhenheight(val) {
        this._celciud = ((val - 32) * 5) / 9;
    }
}
const temp = new Temperature;
console.log(temp);
