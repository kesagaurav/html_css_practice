import { Company } from "./company";
import { Person } from "./person";

export class Student{// has a relationship
    id:number;
    name:string;
    loc:string;
    salarly:number;
    company:Company;

    constructor( id:number,name:string,loc:string,salarly:number,company:Company){
        this.id=id;
        this.name=name;
        this.loc=loc;
        this.salarly=salarly;
        this.company=company;
    }

    showStudent():string{
        return "the studnt details are " + this.id + " " + this.name + " " + this.loc + " " + this.salarly + " " + this.company.getCompany();
    }
}

let comp1=new Company(1,"infosys");
let comp2=new Company(2,"tcs");
let comp3=new Company(3,"wipro");

let stu1=new Student(1,"gaurav","war",43809,comp1);
console.log( " The values of stu1 " +  stu1.showStudent());
let stu2=new Student(2,"deepa","hyd",44809,comp2);
console.log(" The values of stu2 " + stu2.showStudent());
let stu3=new Student(3,"rama","war",47890,comp3);
console.log(" The values of stu3 " + stu3.showStudent());

export class Person1 extends Student{
    private  personid:number;
    private  personName:string;
    private  contactNumber:number;
    private  personage:number;
    private personGender:string;
      constructor(personid:number,personName:string,contactNumber:number,personage:number,personGender:string,id:number,name:string,loc:string,salarly:number,company:Company) {
      
        super(id,name,loc,salarly,company);
        this.personid=personid;
        this.personName=personName;
        this.contactNumber=contactNumber;
        this.personage=personage;
        this.personGender=personGender;
          
      }
  
      showPerson(){
          "return his id is " + this.personid + "is name is " + this.personName +" his conatct is " + this.contactNumber + "his age is " + this.personage;
      }
}

let company=new Company(1,"infosys");
let student=new Student(1,"gaurav","war",43809,company);
let person=new Person1(1,"gaurav",955071038,23,"male",2,"gaurav1","war",43809,company);
console.log(person);
