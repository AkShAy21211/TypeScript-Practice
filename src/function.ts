const greet = (name:string): string=> `Hello ${name}`



const isPalindrome = (str:string):boolean=>{


    const word = str.split('').reverse().join('');

    return str === word;
}


console.log(isPalindrome('malayalam'));


const average = (arr:Array<number>):number=>{


    return arr.reduce((cval,curr)=>cval+curr) / arr.length;
}


console.log(average([1,6,3,5,2,9,7]));

const findMax = (arr:number[]):number=>{

    return Math.max(...arr);
}

console.log(findMax([4,10,50,23,40,70]));


// default parameter in fn

const add  = (a:number = 50,b:number = 10)=>{


    console.log(a,b);
    
}


add()

