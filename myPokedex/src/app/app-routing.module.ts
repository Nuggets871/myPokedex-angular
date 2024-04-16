import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonFavorisComponent } from './pokemon-favoris/pokemon-favoris.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';


const routes: Routes = [
  { path: 'pokemons', component:PokemonsComponent},
  { path: 'favoris', component:PokemonFavorisComponent},
  { path: 'detail/:id', component:PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
