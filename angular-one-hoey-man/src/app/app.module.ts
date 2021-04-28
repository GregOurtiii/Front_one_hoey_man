import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CreateCharactersComponent } from './create-characters/create-characters.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { CreateTournamentsComponent } from './create-tournaments/create-tournaments.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authGuard.service';
import { TournamentsLobbyComponent } from './tournaments-lobby/tournaments-lobby.component';
import { User, UserUsed } from './services/user.service';
import { Character } from './services/character.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'homepage',
    canActivate: [AuthGuardService],
    component: CharactersListComponent,
  },
  {
    path: 'characters/create',
    canActivate: [AuthGuardService],
    component: CreateCharactersComponent,
  },
  {
    path: 'characters/:idCharacter/tournaments',
    canActivate: [AuthGuardService],
    component: TournamentsListComponent,
  },
  {
    path: 'tournaments/create',
    canActivate: [AuthGuardService],
    component: CreateTournamentsComponent,
  },
  {
    path: 'characters/:idCharacter/tournaments/:idTournament',
    canActivate: [AuthGuardService],
    component: TournamentsLobbyComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CharactersComponent,
    CharactersListComponent,
    CreateCharactersComponent,
    TournamentsComponent,
    TournamentsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuardService, User, Character, UserUsed],
  bootstrap: [AppComponent],
})
export class AppModule {}
