import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.scss']
})
export class TournamentsListComponent implements OnInit {

  tournaments: any[]|undefined =
  [
    {
      nom: "Tournoi 1",
      nbParticipant: "5"
    },
    {
      nom: "Tournoi 2",
      nbParticipant: "48"
    }
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    console.log(this.tournaments[0].nbParticipant);
    this.router.navigate(["createTournaments"]);
  }

}
