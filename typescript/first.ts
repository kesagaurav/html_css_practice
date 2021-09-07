import { Car, Gaurav } from "./car";

console.log("welcome to typescript");

let x:number;
x=100;

console.log(" x is "  + x);


 function helloFunction(){
    console.log("hello ts from function ts");
    
}

helloFunction();


export class MyClass{
    constructor(){
        console.log("hello from constructor ts");
        
    }

    helloMethod(): void{
        console.log("heyy");
        
    }

}

let c1=new MyClass();
c1.helloMethod();

let c2=new Car("toyato");
c2.getCar();
console.log(c2);


let c3=new Gaurav("gaurav",3,300000);

let c4=new Gaurav("deepa1",4,400000);

let c5=new Gaurav("sai",5,5000);
c3.getGaurav();
console.log(" c4 details are " + c4.getGaurav() + " c5 details are " +  c5.getGaurav());

