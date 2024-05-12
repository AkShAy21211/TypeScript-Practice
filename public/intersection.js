"use strict";
const user = {
    id: 1,
    name: 'Akshay',
    age: 20
};
const account = {
    accountNumber: 123456789,
    accountType: 'Savings'
};
const combine = (user, acc) => {
    return {
        ...user,
        ...acc
    };
};
const cobineINfo = combine(user, account);
console.log(cobineINfo);
