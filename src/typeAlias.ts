export type Person = {

    name:string;
    age:number;
    isStudent:boolean;
    class?:string;
    address:{city:string;country:string}

}


const person1:Person = {
    name:'',
    age:3,
    isStudent:true,
    address:{city:'',country:''}
}

const person5:Person = {

    name:'',
    age:3,
    isStudent:true,
    address:{city:'',country:''}
}

type NumberAndString = number|string;

let c:NumberAndString;