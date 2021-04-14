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

import { AuthService } from './services/auth.service'
import { AuthGuardService } from './services/authGuard.service';

const appRoutes : Routes = [ {path: "", component: LoginComponent}, 
                             {path: "register", component: RegisterComponent},
                             {path: "homepage", canActivate : [AuthGuardService], component: CharactersListComponent},
                             {path: "createCharacter", canActivate : [AuthGuardService], component: CreateCharactersComponent},
                             {path: "tournaments", canActivate : [AuthGuardService], component : TournamentsListComponent},
                             {path: "createTournaments", canActivate : [AuthGuardService], component : CreateTournamentsComponent}]

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
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
