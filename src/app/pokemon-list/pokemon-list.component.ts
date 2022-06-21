import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../Services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  

  constructor (public  pokemonService: PokemonService ) { }

  ngOnInit(): void {
  }

}