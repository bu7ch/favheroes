import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getHeroes(): Hero[] {
    return [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Spiderman' },
      { id: 4, name: 'Ironman' },
      { id: 5, name: 'Thanos' },
      { id: 6, name: 'Octopus' },
      { id: 7, name: 'Hulk' },
      { id: 8, name: 'Thor' },
    ];
  }
}
