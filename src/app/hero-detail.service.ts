import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {

  private hero: Hero;
  constructor(private heroService: DataService) { }

  getHero(id: number): Hero{
    const heroes = this.heroService.getHeroes();
    if(!this.hero){
      this.hero = heroes.find(hero => hero.id === id);
      //  TODO: need Optimization
    }
    return this.hero
  }
}
