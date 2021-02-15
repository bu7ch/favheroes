import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Hero } from 'src/app/hero.model';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [],
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private heroSub = new Subject();
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  private getHeroes() {
    this.heroes$ = this.heroService.getHeroes()
    // plus besoin avec la transformation de heroes en heroes$
    /* .pipe(
    //   map(heroes => this.heroes$ = heroes),
    //   takeUntil(this.heroSub)
     ).subscribe() */
  }
  ngOnDestroy(): void {
    this.heroSub.next();
    this.heroSub.complete();
  }

  // add(name: string) {
  //   this.heroService
  //     .createHero(name)
  //     .subscribe((hero) => this.heroes$.push(hero));
  // }
  // rename(hero: Hero) {
  //   const existingHero = { id: hero.id, name: 'Batman' };
  //   this.heroService.editHero(hero.id, existingHero).subscribe(() => {
  //     this.heroes$.find((hero) => hero.id).name = 'Prout';
  //   });
  // }
  // remove(hero: Hero) {
  //   this.heroService.deleteHero(hero.id).subscribe(() => {
  //     this.heroes$ = this.heroes$.filter((selected) => selected !== hero);
  //   });
  // }
}
