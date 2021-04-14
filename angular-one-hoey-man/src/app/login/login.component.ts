import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authStatus : boolean;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onRegister(){
    this.router.navigate(["register"]);
  }

   onLogin(){
     this.authService.signIn();//.then(() => {})
     this.authStatus = this.authService.isAuth;
     this.router.navigate(["homepage"]);
   }
}
