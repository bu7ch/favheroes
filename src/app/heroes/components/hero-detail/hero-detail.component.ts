import { Component, Input, OnInit } from '@angular/core';
import { HeroDetailService } from 'src/app/hero-detail.service';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [
  ]
})
export class HeroDetailComponent implements OnInit {
hero: Hero
@Input() id: number;
  constructor(private heroDetailService: HeroDetailService) { }

  ngOnInit(): void {
    this.hero = this.heroDetailService.getHero(this.id)
  }

}
