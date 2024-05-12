let logAndReturn = <T>(value:T):T=>{
    return value
}


const num = logAndReturn<number>(4);
const string = logAndReturn<string>('fsdd');


function addValue<T>(a: T, b: T): T {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b as unknown as T; // Assuming T can be a number
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b as unknown as T; // Assuming T can be a string
    } else if(typeof a === 'object' && typeof b === 'object') {
        return {...a,...b} as unknown as T;
    }else{
        return {a,b} as unknown as T;
    }
}
