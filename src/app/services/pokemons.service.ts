import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
  return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
  
  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

    getPokemonById(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}
