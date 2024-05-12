type User = {
    id:number;
    name:string;
    age:number;
}

type Account={

    accountNumber:number;
    accountType:string;
}

const user:User = {
    id:1,
    name:'Akshay',
    age:20
}

const account:Account = {

    accountNumber:123456789,
    accountType:'Savings'
}

const combine:(user:User,acc:Account) =>any =  (user:User,acc:Account):any=>{


    return {
        ...user,
        ...acc
    }
}

const cobineINfo:User & Account = combine(user,account)


console.log(cobineINfo);
