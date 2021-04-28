import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authStatus : boolean;
  username = "";
  password = "";

  constructor(private router : Router, private authService : AuthService, private http: HttpClient, private user : User) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onRegister(){
    this.router.navigate(["register"]);
  }

   onLogin(){
     this.authService.signIn(this.username, this.password).then(() => {
      this.authStatus = this.authService.isAuth;
      this.router.navigate(["homepage"]);
     });
   }
}
