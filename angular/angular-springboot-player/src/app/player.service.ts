import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9001/player";
  }

  public addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.url, player);
    
  }

  public updatePlayer(id:number,player: Player): Observable<Player> {
    return this.http.put<Player>(this.url + `/${id}`, player);
  }
  public deletePlayer(id: number):Observable<any> {
    return this.http.delete(this.url + `/${id}`);  
  }

  public getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }
}
