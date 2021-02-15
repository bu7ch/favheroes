import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes/';
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  createHero(name: string): Observable<Hero> {
    const hero = { name };
    return this.http.post<Hero>(this.heroesUrl, hero);
  }
  editHero(id: number, hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.heroesUrl + id, hero);
  }
  deleteHero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + id);
  }
}
