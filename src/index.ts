//define type of veriables
let a = 'Hello';

//let a:string;
// a = 33

//cant reasign a to any other datatype other than string;


//program to add two numbers

const sum = (a:number,b:number): number =>{

    return a+b;
}

//types
let d:number = 70;
let e:string = 'hello';
let f:boolean = true;

const isEven = (x:number):boolean=>{

    return x%2===0;
}
let g:(number|string)[] = ['fdsf',2]


//bignInt;

const maxNumber:bigint =9007199254740995n;

//unknown

let k:unknown;
k=2;
k='ferwf';



if(typeof k === 'string'){

    k.concat()
}