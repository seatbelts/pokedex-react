import { NamedAPIResource, Pokemon } from 'pokenode-ts';

/**
 * @description An custom interface that extends from NamedAPIResource and add a custom details option
 *
 * @interface PokemonListI
 */
export interface PokemonListI extends NamedAPIResource {
  details: Pokemon;
}
