import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Team } from '../team';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

id:number;
 private player:Player;
 //private team:Team;
  constructor(private service: PlayerService, private router: Router) {
    this.player=new Player();
     this.player.team=new Team();
   }

  ngOnInit() {
  }


playerToUpdate={
  name:"",
  age:"",
  gender:"",
  city:""
};



    save(player){
      this.playerToUpdate=player;
    }


  savePlayer(player,id){

    this.service.updatePlayer(id,this.player).subscribe(res=>{
      console.log(res);
      this.player=new Player();
      this.router.navigate(['/viewPlayers']);
      
    })
  }

  

}
