import { Component, OnInit } from '@angular/core';
import {Competition} from 'src/app/modelo/competition/competition';
import { CompetitionService } from 'src/app/modelo/competition/competition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css']
})
export class CompetitionsListComponent implements OnInit {

  competitions: Competition[];
  allCompetitions: Competition[];

  competition : Competition;

  constructor(private competitionService: CompetitionService,
    private router: Router) { }


  ngOnInit(): void {
    this.reloadData();

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.trim().toLowerCase();
    if(filterValue === '' ) {
        this.competitions=this.allCompetitions;
    } 
    else {
      this.competitions = this.allCompetitions.filter((c) => c.name.toLowerCase().includes(filterValueLower) || c.area.name.toLowerCase().includes(filterValueLower) );
    }
 }
  reloadData() {    
    this.competitionService.getCompetitionList().subscribe(data=>{
      this.competitions=data;
      this.allCompetitions=data;
      console.log(this.competitions);

    } );
  }
    showTeams(idCompetition: number){
      this.router.navigate(['teams', idCompetition]);
    }
  

}
