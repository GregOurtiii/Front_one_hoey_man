import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Observable, throwError} from 'rxjs';
import { Character } from './character.service';
import { User } from './user.service';

@Injectable()
export class AuthService{

    constructor(private http : HttpClient, private user : User, private character : Character){}

    isAuth = true;//false;
    posts: Observable<any>|undefined
    urlAPI = "https://one-hoey-man.oups.net/api/users/"

    signIn(username, password){
        return new Promise((resolve, reject) => {
            console.log(username + " " + password);
            var url = this.urlAPI;
            url.concat("login")
            this.posts = this.http.post(url, {"username": username, "password":password});
            this.posts.forEach(async (value) => {
                this.user = await value.data as User;
                this.character.characters = await value["characters"];

                console.log(this.user);
                //console.log(liste);
                this.isAuth = true;
            });
        });
    }

    signOut(){
        this.isAuth = false;
    }

    signUp(username, password, email){
        return new Promise((resolve, reject) => {
            console.log(username + " " + password + " " + email);
            var url = this.urlAPI;
            url.concat("register")
            this.posts = this.http.post(url, {"username": username, "password":password, "email":email});
            this.posts.forEach(async (value) => {
                //this.user = await value.data as User;
                //console.log(this.user);
                //console.log(liste);
                this.isAuth = true;
                this.character.characters = [];
            });
        });
    }
}