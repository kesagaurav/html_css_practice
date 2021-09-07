export class Team{
    private teamid:number;
    private teamName:string;

    constructor(teamid:number,teamName:string){
        this.teamid=teamid;
        this.teamName=teamName;
    }

    getTeam():string{
        return " team id is " + this.teamid + " and his name is " + this.teamName;
    }

}