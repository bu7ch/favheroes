import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[]
  constructor() {}

  ngOnInit(): void {
    this.heroes = [
      {id: 1, name: 'Batou'},
      {id: 2, name: 'Spidou'},
      {id: 3, name: 'Dr.Octopus'},
      
    ];
  }
}
