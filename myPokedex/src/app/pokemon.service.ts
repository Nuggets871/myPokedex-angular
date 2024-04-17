import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlPokeAPI = 'https://pokeapi.co/api/v2/pokemon';
  private apiUrlTyradex = 'https://tyradex.vercel.app/api/v1/gen/1';

  constructor(
    private http: HttpClient,
  ) { }

  getMockPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  loadPokemons(): Observable<Pokemon[]> {
    return this.http.get< Pokemon[]>(this.apiUrlTyradex)
      .pipe(
        map(response => response)
      )
  }

  
}
