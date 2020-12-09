import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CompetitionsListComponent } from './componentes/competitions-list/competitions-list.component';
import { TeamListComponent } from './componentes/team-list/team-list.component';
import { PlayerListComponent } from './componentes/player-list/player-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'competitions', component: CompetitionsListComponent, },
  { path: 'teams/:id', component: TeamListComponent },
  { path: 'players/:id', component: PlayerListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
