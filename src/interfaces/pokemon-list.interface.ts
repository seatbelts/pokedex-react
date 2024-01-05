import { NamedAPIResource, Pokemon } from 'pokenode-ts';

export interface PokemonListI extends NamedAPIResource {
  details: Pokemon;
}
