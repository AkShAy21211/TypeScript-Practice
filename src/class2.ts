class BankAccount{

    private _balance:number = 0;


    public get balance():number{
        return this._balance;
    }

    public set balance(val:number){

        if(val<0){
            throw new Error('Invalid balance');
        }

        this._balance = val
    }
}



const b1 = new BankAccount();

class Temperature{

    private _celciud:number = 0;


    public get celcius():number{
        return this._celciud
    }

    public set celcius(val:number){
        this._celciud = val;
    }

    public get farhenheight():number{

        return (this._celciud * 9) / 5 + 32;
    }

    public set farhenheight(val:number){

        this._celciud = ((val - 32) * 5) / 9;
    }
}


const temp:any  = new  Temperature

console.log(temp);
