import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() pokemons: Pokemon[] = [];

  constructor(private router: Router) {}

  goToDetail(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.pokedexNumber]);
  }
}
