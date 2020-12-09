import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';


@Injectable({
  providedIn: 'root'
})

export class TeamService {
  private baseUrl= "http://localhost:8080/api/competitions";
  private teamURL= "http://localhost:8080/api/teams";

  constructor(private http: HttpClient) { }

  public getTeamList(idCompetition: number):Observable<any[]> {
    return this.http.get<Team[]>(`${this.baseUrl}/${idCompetition}/teams`);
  }
  public getTeam(idTeam: number):Observable<any> {
    return this.http.get(`${this.teamURL}/${idTeam}`);
  }
}
