import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon= [];

  constructor(public httpClient: HttpClient) { 

    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

    this.pokemon = requisicao.results;
  }
}
