"use strict";
const input = (val) => {
    return typeof val === 'number' ? val * 2 : val.toUpperCase();
};
console.log(input(5));
