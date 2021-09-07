import { MyGauravInterface } from './interface';
export class Gaurav implements MyGauravInterface{
    hello1(){
        console.log("hi i am from hello method");
        
    }
    hello2():string{
        return "heyyy from hello2 ";
    }
   
    gaurav() {
       console.log('hi i am from gaurav class.');
     
    }
    
    
    
}

let x=new Gaurav();
console.log(x.hello1());
console.log(x.hello2());
console.log(x.gaurav());


