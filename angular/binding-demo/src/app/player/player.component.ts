import { Player } from './../player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent  {
  playerList:Player[];
  player:Player;
  flag:boolean;
  constructor() {
    this.player=new Player();
    this.playerList=[];
    this.flag=false;

  }

  addPlayer(){
    this.playerList.push(this.player);
    this.player=new Player();
    console.log(this.playerList);
    this.flag=true;


  }

  deletePlayer(){
    this.playerList.pop();
    if(this.playerList.length==0){
      this.flag=false;

    }



  }

  deletePlayerBasedOnId(id){

    let index=this.playerList.findIndex(e=>e.id===id);
    if(index!==-1){
      this.playerList.splice(index,1);
    }
    console.log(id);

  }



}


