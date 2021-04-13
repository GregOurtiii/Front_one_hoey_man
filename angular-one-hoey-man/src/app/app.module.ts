import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CreateCharactersComponent } from './create-characters/create-characters.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { CreateTournamentsComponent } from './create-tournaments/create-tournaments.component';

const appRoutes : Routes = [ {path: "", component: LoginComponent}, 
                             {path: "register", component: RegisterComponent},
                             {path: "homepage", component: CharactersListComponent},
                             {path: "createCharacter", component: CreateCharactersComponent},
                             {path: "tournaments", component : TournamentsListComponent},
                             {path: "createTournaments", component : CreateTournamentsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CharactersComponent,
    CharactersListComponent,
    CreateCharactersComponent,
    TournamentsComponent,
    TournamentsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
