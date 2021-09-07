import { Person } from './person';
import { Team } from './team';
export class Player{

    private id:number;
    private firstName:string;
    private lastName:string;
    private gender:string;
    private age:number;
    private contact:string;
    private team:Team; //has a relationship

   
    constructor(id:number,firstName:string,lastName:string,gender:string,age:number,contact:string,team:Team){
      this.id=id;
      this.firstName=firstName;
      this.lastName=lastName;
      this.gender=gender;
      this.age=age;
      this.contact=contact;
      this.team=team;
    }


    getPlayerDetails():string{
        return "player id is " + this.id + " and his name is " + this.firstName + " and his last name is" + this.lastName + " and his age is " + this.age + "his gender is " + this.gender + "his conatctnumber is " + this.contact + " his team is " + this.team.getTeam();
    }

   
    



}


let t1=new Team(1,"india");
let p1=new Player(1,"gaurav","kesa","male",23,"901901901",t1);
console.log(p1);
//console.log(t1);




