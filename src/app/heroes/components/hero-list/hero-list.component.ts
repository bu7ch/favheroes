import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: DataService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
