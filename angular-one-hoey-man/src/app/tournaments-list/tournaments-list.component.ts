import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const idCharacter = this.route.snapshot.params["idCharacter"];
    console.log(idCharacter);
  }

  onCreate(){
    //remodeler le lien pour conserver l'id character
    this.router.navigate(["tournaments/create"]);
  }

}
