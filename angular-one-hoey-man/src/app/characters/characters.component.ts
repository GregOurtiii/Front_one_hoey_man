import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @Input() nom: string|undefined;
  @Input() classe: string|undefined;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onCharacterSelected(){
    this.router.navigate(["characters/" + this.nom + "/tournaments"]);
  }

}
