import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-lobby',
  templateUrl: './tournaments-lobby.component.html',
  styleUrls: ['./tournaments-lobby.component.scss']
})
export class TournamentsLobbyComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const idTournament = this.route.snapshot.params["idTournament"];
    //console.log(idTournament);
  }

  onJoin(){
    this.router.navigate([""]);
  }

}
