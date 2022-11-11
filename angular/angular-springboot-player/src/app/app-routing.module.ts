import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { HttpClientModule } from '@angular/common/http'



const routes: Routes = [
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'updatePlayer', component: UpdatePlayerComponent },
  { path: 'deletePlayer', component: DeletePlayerComponent },
  { path: 'viewPlayers', component: ViewPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
