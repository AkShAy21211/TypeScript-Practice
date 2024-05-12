type Student = {

    sName:string;
    sAge:number;
    gender?:string;
    greet:(country:string)=>string;

}

const s1:Student = {

    sName:'Vinod',
    sAge:20,
    greet:(country):string => `welcome may name is ${s1.sName} iam ${s1.sAge}yrs old abd ian from ${country}`

}

const introduction:(student:Student)=> string = (student:Student):string=>{

    const {sName,sAge} = student;

    return `welcome may name is ${sName} iam ${sAge} old`
}

console.log(introduction(s1));
console.log(s1.greet('india'));

