import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Hero } from 'src/app/hero.model';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  private getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string) {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));
  }
  rename(hero: Hero) {
    const existingHero = { id: hero.id, name: 'Batman' };
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find((hero) => hero.id).name = 'Batman';
    });
  }
  remove(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((selected) => selected !== hero);
    });
  }
}
