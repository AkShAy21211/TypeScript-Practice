"use strict";
class BankAccount {
    _balance = 0;
    person = {};
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = value;
    }
}
const account1 = new BankAccount();
account1.balance = 10;
console.log(account1.balance);
