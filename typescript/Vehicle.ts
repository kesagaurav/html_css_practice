import { MyInterface } from "./studentinterface";

export class Vehicle {
    name:string;
    constructor(name:string) {
        this.name=name;
    }

    getVehicle():string{
        return "The Vehicle is " + this.name;
    }

    static iAmStatic():void{
        console.log("i am in static method");
        
    }
  
   

}

let g=new Vehicle("indica");
console.log(g.getVehicle());
Vehicle.iAmStatic();


export class Student{
    private name:string;
    private rollno:number;
    private section:string;

    constructor(name:string,rollno:number,section:string){
        this.name=name;
        this.rollno=rollno;
        this.section=section;
    }

    getStudentDetails():string{
        return "the details of student are " + " "+ this.name +" "+ this.rollno +" "+ this.section;
    }
}

let stu=new Student("gauraav",1,"A");
console.log(stu.getStudentDetails());


export class MyInterfaceImpl implements MyInterface{
    hello() {
        console.log("i am using interface concepts");
        

    }
    hello1(): string {
        return " i am using string using interface";
        
    }
    id():number{
        return 10;
    }
    
}

let ok=new MyInterfaceImpl();
ok.hello();
 console.log(ok.hello1());
 console.log(ok.id());
 
