class NewPerson {
  private name: string;
  protected age: number;
  hobbies: string[];
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  introduce(): string {
    return `Hello iam ${this.name} ${
      this.age
    }yrs old and i love ${this.hobbies.join(",")}`;
  }
}



const p1: NewPerson = new NewPerson("Akshay", 20, ["writing", "Reading"]);





















// short hand property using class

class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    private price: number,
    public color: string[]
  ) {}

  info(){

    return `The car name is ${this.name} and its brand is ${this.brand} and price will be ${this.price} and will be in ${this.color} colors`
  }
}

class HondaCity extends Vehicle{

    constructor(name:string,brand:string,price:number,color:string[],public spec:string){

        super(name,brand,price,color)
    }

   
}


const handa = new HondaCity('hondacity','honda',200000,['red','ehite'],'v8')


console.log(handa.info());
