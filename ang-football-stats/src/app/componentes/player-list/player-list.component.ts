import { Component, OnInit } from '@angular/core';
import {Player} from 'src/app/modelo/player/player';
import {PlayerService} from 'src/app/modelo/player/player.service';
import { ActivatedRoute,Router } from '@angular/router';
import { TeamService } from 'src/app/modelo/team/team.service';
import { Team } from 'src/app/modelo/team/team';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  idTeam: number;
  team : Team;
  players: Player[];
  allPlayers: Player[];
  player: Player;
  constructor(private playerService :PlayerService,private teamService : TeamService , private router: Router,private route: ActivatedRoute) { 
    this.team = new Team();
  }

  ngOnInit(): void {
    this.idTeam = this.route.snapshot.params['id'];
    this.teamService.getTeam(this.idTeam).subscribe(data=>{
      this.team= data;
      this.players = data.squad;   
      this.allPlayers = data.squad; 
    } );
    this.reloadData();
  }
  reloadData() {
    
  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.trim().toLowerCase();
    if(filterValue === '' ) {
        this.players=this.allPlayers;
    } 
    else {
      this.players = this.allPlayers.filter((c) => c.name.toLowerCase().includes(filterValueLower) );
    }
 }
 

}
