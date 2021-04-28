import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Character } from './character.service';
import { User, UserUsed } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private user: UserUsed,
    private character: Character
  ) {}

  isAuth = true; //false;
  posts: Observable<any> | undefined;
  urlAPI = 'http://localhost:8080/api/users/';
  userUsed = undefined;

  signIn(username, password) {
    return new Promise((resolve, reject) => {
      console.log(username + ' ' + password);
      var url = this.urlAPI;
      url = url.concat('login');
      this.posts = this.http.post(url, {
        username: username,
        password: password,
      });
      this.posts.forEach(async (value) => {
        if (value != null) {
          this.user.user = (await value) as User;
          this.character.characters = await value['characters'];
          this.userUsed = this.user;
          console.log(this.user);
          console.log(this.character.characters);
          this.isAuth = true;
          resolve(true);
        }

        //console.log(value);
      });
    });
  }

  signOut() {
    this.isAuth = false;
  }

  signUp(username, password, email) {
    return new Promise((resolve, reject) => {
      console.log(username + ' ' + password + ' ' + email);
      var url = this.urlAPI;
      url = url.concat('register');
      this.posts = this.http.post(url, {
        username: username,
        password: password,
        email: email,
      });
      this.posts.forEach(async (value) => {
        if (value != null) {
          console.log(value);
          this.user.user = (await value) as User;
          //console.log(liste);
          this.isAuth = true;
          this.character.characters = await value['characters'];
          console.log(this.user);
          resolve(true);
        }
      });
    });
  }
}
