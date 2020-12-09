import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Competition } from './competition';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl= "http://localhost:8080/api/competitions";

  constructor(private http: HttpClient) { }

  public getCompetitionList():Observable<any[]> {    
    return  this.http.get<Competition[]>(this.baseUrl);
  }
  public getCompetition(idCompetition: number):Observable<any> {
    return this.http.get(`${this.baseUrl}/${idCompetition}`);
  }
}
