import { Component, OnInit } from '@angular/core';
import {Team} from 'src/app/modelo/team/team';
import {TeamService} from 'src/app/modelo/team/team.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Competition } from 'src/app/modelo/competition/competition';
import { CompetitionService } from 'src/app/modelo/competition/competition.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  idCompetition: number;
  public competition: Competition;

  teams: Team[];
  allTeams: Team[];
  team : Team;

  constructor(private teamService :TeamService, private competitionService : CompetitionService,private router: Router,private route: ActivatedRoute) { 
    this.competition = new Competition();
  }

  ngOnInit(): void {

    this.idCompetition = this.route.snapshot.params['id'];
    this.competitionService.getCompetition(this.idCompetition).subscribe(data=>{
      this.competition=data;
      this.competition.pais=data.area.name;
    } );
    this.reloadData();

  }
  reloadData() {    
    this.teamService.getTeamList(this.idCompetition).subscribe(data=>{
      this.allTeams = data;
      this.teams = data;

    } );
  }
  showPlayers(idTeam: number){
    this.router.navigate(['players', idTeam]);
  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.trim().toLowerCase();
    if(filterValue === '' ) {
        this.teams=this.allTeams;
    } 
    else {
      this.teams = this.allTeams.filter((t) => t.name.toLowerCase().includes(filterValueLower)  );
    }
 }
}
