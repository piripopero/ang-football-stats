import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsListComponent } from './componentes/competitions-list/competitions-list.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { TablePipePipe } from './componentes/competitions-list/table-pipe.pipe';
import { TeamListComponent } from './componentes/team-list/team-list.component';
import { PlayerListComponent } from './componentes/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsListComponent,
    HomeComponent,
    TablePipePipe,
    TeamListComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
