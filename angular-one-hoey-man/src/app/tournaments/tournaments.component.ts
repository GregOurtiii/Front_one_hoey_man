import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  @Input() nom: string|undefined;
  @Input() nbParticipant: string|undefined;

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onTournamentSelected(){
    const id = this.route.snapshot.params["idCharacter"];
    console.log(id);
    this.router.navigate(["characters/" + id + "/tournaments/" + this.nom]);
  }

}
