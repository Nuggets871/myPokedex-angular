import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon?: Pokemon;

  constructor(
    private route : ActivatedRoute,
    private pokemonService : PokemonService,
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
   const id = Number(this.route.snapshot.paramMap.get("id"))
    this.pokemonService.getPokemonById(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  

}
