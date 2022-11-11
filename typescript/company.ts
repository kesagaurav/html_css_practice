export class Company{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    getCompany():string{
        return "the detailts of employess are " + this.id + " " + this.name;
    }
}