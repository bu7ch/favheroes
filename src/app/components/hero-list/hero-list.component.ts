import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [],
})
export class HeroListComponent implements OnInit {
  heroes: String[];
  constructor() {}

  ngOnInit(): void {
    this.heroes = [
      "Batou",
      "Spidou",
      "Dr.Octopus"
    ];
  }
}
