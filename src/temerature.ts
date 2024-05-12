class Temperature{

    private _celcius:number = 0;


    public get celcius():any{

       return this._celcius;
    }


    public set celcuis(value:number){

        this._celcius = value;

    }

    public get fahrenHeight():number{

        return (this._celcius * 9) / 5 + 32
    }

    public set fahrenHeight(numF:number){

        this._celcius = (numF  -32) / 5 + 9
    }
}

const temp = new Temperature();

temp.celcuis = 25;


console.log(temp.fahrenHeight);

console.log(temp.celcius);

