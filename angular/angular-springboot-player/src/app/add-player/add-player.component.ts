import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Team } from '../team';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent  {
  @Input('serElement')  private player: Player;
  private team: Team;
  
 // @Input('serElement') element:{name:string,age:number,city:string,gender:string,avatar:string,teamName:string}

  constructor(private service: PlayerService, private router: Router) {
    this.player = new Player();
    this.player.team=new Team();
  }


  public addPlayer(): void {
    this.service.addPlayer(this.player).subscribe(res => {
      this.player = new Player();
      //this.player.team=new Team();
      this.router.navigate(['/viewPlayers']);
    })
  }

}
