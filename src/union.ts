
type Person = {

   info:()=>void;
}
const input:(val:string|number)=>string|number = (val:string|number):string|number=>{

   return typeof val === 'number'?val*2:val.toUpperCase();

}  


console.log(input(5));

let l:()=>void;


type f  = readonly [string,number];


const r:f = ['sfd',3]

