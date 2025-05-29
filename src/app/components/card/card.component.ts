import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pokemon!: Pokemon;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/pokemon', this.pokemon.pokedexNumber]);
  }
}
