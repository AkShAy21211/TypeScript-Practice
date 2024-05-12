// function sumOf2(a:number,b:number):number;

// function sumOf2(a:string,b:string):string;

// function sumOf2(a:any,b:any):any{

//     return {...a,...b}
// }


//using generics

function sumOf2<T,U>(a:T,b:U):any{

    console.log(typeof a);
    console.log(typeof b);

    
}

let arr:readonly [number,string];

const res1 = sumOf2<number,string>(2,'4');
const res2 = sumOf2<string,string>('fsf','fdsf');
