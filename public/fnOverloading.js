"use strict";
// function sumOf2(a:number,b:number):number;
// function sumOf2(a:string,b:string):string;
// function sumOf2(a:any,b:any):any{
//     return {...a,...b}
// }
//using generics
function sumOf2(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
let arr;
const res1 = sumOf2(2, '4');
const res2 = sumOf2('fsf', 'fdsf');
