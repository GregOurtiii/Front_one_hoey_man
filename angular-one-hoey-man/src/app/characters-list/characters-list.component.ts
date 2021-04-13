import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: any[]|undefined =
  [
    {
      nom: "hamid la guerre",
      classe: "guerrier"
    },
    {
      nom: "ui le ui",
      classe: "mage"
    }
  ];


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.router.navigate(["createCharacter"]);
  }

}
