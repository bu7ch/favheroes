import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      heroes: [
        { id: 1, name: 'Superman' },
        { id: 2, name: 'Batman' },
        { id: 3, name: 'Spiderman' },
        { id: 4, name: 'Ironman' },
        { id: 5, name: 'Thanos' },
        { id: 6, name: 'Octopus' },
        { id: 7, name: 'Hulk' },
        { id: 8, name: 'Thor' },
      ],
    };
  }
}
