class PersonNew{


    public static house:string;
    constructor(public name:string){}
    public static getHouse():string{

        return this.house
    }
}


PersonNew.house = 'Azhikode';

console.log(PersonNew);

