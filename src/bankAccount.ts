class BankAccount {


    private _balance:number = 0;
    private person:object = {};
    public get balance():any{

        return this._balance;
    }

    public set balance(value:number){

        if(value<0){
            throw new Error("Invalid balance");
        }

        this._balance = value;
    }
}



const account1 = new BankAccount();

account1.balance = 10;


console.log(account1.balance);
