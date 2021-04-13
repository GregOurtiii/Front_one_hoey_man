import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  @Input() nom: string|undefined;
  @Input() nbParticipant: string|undefined;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onTournamentSelected(){
    this.router.navigate([""]);
  }

}
