import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../models/pokemon.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  loading = true;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getAllPokemons().subscribe((response) => {
      const requests = response.results.map((poke: any) =>
        this.pokemonsService.getPokemonByUrl(poke.url)
      );

      forkJoin<any[]>(requests).subscribe((pokemonDataList) => {
        this.pokemons = pokemonDataList.map((data: any) => ({
          name: data.name,
          pokedexNumber: data.id,
          sprite: data.sprites.front_default,
          types: data.types.map((t: any) => t.type.name),
          evolutions: [],
          description: ''
        }));

        this.loading = false;

      });
    });
  }

  viewMode: 'list' | 'grid' = 'list';

  toggleView(mode: 'list' | 'grid') {
    this.viewMode = mode;
  }


  
}
