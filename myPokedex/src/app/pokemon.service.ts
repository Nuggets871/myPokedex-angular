import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(
    private http: HttpClient,
  ) { }

  getMockPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  loadPokemons(): Observable<Pokemon[]> {
    return this.http.get<{results: Pokemon[]}>(this.apiUrl)
      .pipe(
        map(response => response.results)
      )
  }

  
}
