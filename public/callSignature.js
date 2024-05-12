"use strict";
const s1 = {
    sName: 'Vinod',
    sAge: 20,
    greet: (country) => `welcome may name is ${s1.sName} iam ${s1.sAge}yrs old abd ian from ${country}`
};
const introduction = (student) => {
    const { sName, sAge } = student;
    return `welcome may name is ${sName} iam ${sAge} old`;
};
console.log(introduction(s1));
console.log(s1.greet('india'));
