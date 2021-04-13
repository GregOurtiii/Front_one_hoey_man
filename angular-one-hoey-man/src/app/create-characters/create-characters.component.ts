import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-characters',
  templateUrl: './create-characters.component.html',
  styleUrls: ['./create-characters.component.scss']
})
export class CreateCharactersComponent implements OnInit {

  classes: any[]|undefined = ["Guerrier","Mage","Voleur"];
  equipements: any[]|undefined = ["Gant","casque","Plastron"];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onCreateFinish(){
    this.router.navigate(["homepage"]);
  }

}
