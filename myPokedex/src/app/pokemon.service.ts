import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return POKEMONS.filter(p => p.id === id)
  }

}
