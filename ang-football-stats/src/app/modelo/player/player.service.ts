import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl= "http://localhost:8080/api/teams";

  constructor(private http: HttpClient) { }

  public getPlayerList(idTeam: number):Observable<any[]> {
    return this.http.get<Player[]>(`${this.baseUrl}/${idTeam}`);
  }
}
