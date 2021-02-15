import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';



@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }
