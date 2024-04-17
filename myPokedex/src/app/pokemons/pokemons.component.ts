import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  pokemons:Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.loadPokemons().subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons
        console.log("getPokemons bien effectué :", this.pokemons )
      },
      error: (e) => {
        console.error("Erreur lors du getPokemon", e)
      }
    })
  }

  // getPokemons(): void {
  //   this.pokemonService.loadPokemons().subscribe(pokemons => this.pokemons = pokemons)
  // }
}
