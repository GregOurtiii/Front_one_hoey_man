import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User, UserUsed } from '../services/user.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters: any[] | undefined = [
    {
      nom: 'hamid la guerre',
      classe: 'guerrier',
    },
    {
      nom: 'ui le ui',
      classe: 'mage',
    },
  ];

  username = '';

  constructor(
    private router: Router,
    private user: UserUsed,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    console.log(this.auth.userUsed);
  }

  onCreate() {
    this.router.navigate(['characters/create']);
  }
}
