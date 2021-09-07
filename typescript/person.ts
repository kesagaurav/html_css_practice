import { Player } from './player';
import { Team } from './team';
export class Person extends Player{ // is a relationship
  private  personid:number;
  private  personName:string;
  private  contactNumber:number;
  private  personage:number;
  private personGender:string;
    constructor(id:number,firstName:string,lastName:string,gender:string,age:number,contact:string,team:Team,personid:number,personName:string,contactNumber:number,personage:number,personGender:string) {
        super(id,firstName,lastName,gender,age,contact,team);
        this.personid=personid;
        this.personName=personName;
        this.contactNumber=contactNumber;
        this.personage=personage;
    }

    showPerson(){
        "return his id is " + this.personid + "is name is " + this.personName +" his conatct is " + this.contactNumber + "his age is " + this.personage;
    }
}

let t1=new Team(1,"india");
let p1=new Player(1,"gaurav","kesa","male",23,"901901901",t1);
let p3=new Person(2,"gaurav2","kesa2","male",23,"9550671038",t1,2,"gaurav",9010910,23,"male" );
console.log(p3);
