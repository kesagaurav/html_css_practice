export class Car{
    name:string
    constructor(name:string){
        this.name=name;
    }

    getCar():string{
        return "car is " + this.name;
    }

}


export class Gaurav{
    private name:string;
    private id:number;
    private salarly:number;

    constructor(name:string,id:number,salarly:number){
        this.name=name;
        this.id=id;
        this.salarly=salarly;
    }

    getGaurav():string{
        return " gaurav name is "+ this.name +  " and his id is " + this.id + "and his salalry his " + this.salarly;
    }

}