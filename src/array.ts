//using array in ts

//using type and [] bracket
const number:number[] = [];

//using Array contructor
const number2:Array<number> = [];

//using Array.of methood;
const number3 = Array.of('Akshay','aswanth','kiran');

console.log(typeof number2);


const fruits:string[] = ['apple','orange','grape','watermillon'];


const updatedFruits = fruits.push('kivi');
const lastData = fruits.pop()
const firstData = fruits.unshift()
console.log(updatedFruits);
console.log(lastData);

console.log(firstData);


console.log(fruits);

fruits.forEach((val:string)=>console.log(val));


const numbers:number[] = [1,2,3,4,5,6,7,8,9];

console.log(numbers.map((val)=>val*2));

let multi:number[][] = [[1,2,3,4],[5,6,7,8]]

console.log(multi);
