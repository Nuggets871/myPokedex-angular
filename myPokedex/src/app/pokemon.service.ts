import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { Observable, of, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlPokeAPI = 'https://pokeapi.co/api/v2/pokemon';
  private apiUrlTyradex = 'https://tyradex.vercel.app/api/v1';

  constructor(
    private http: HttpClient,
  ) { }

  getMockPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  loadPokemons(): Observable<Pokemon[]> {
    let url = `${this.apiUrlTyradex}/gen/1`
    return this.http.get< Pokemon[]>(url);
      // .pipe(
      //   map(response => response)
      // )
  }

  getPokemonById(id: number): Observable<Pokemon> {
    let url = `${this.apiUrlTyradex}/pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  }

  
}
