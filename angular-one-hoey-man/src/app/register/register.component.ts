import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = "";
  password = "";
  email = "";

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.authService.signUp(this.username, this.password, this.email).then(() => {
      this.router.navigate(["homepage"]);
    })
  }

}
