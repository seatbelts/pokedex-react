export interface PokemonListI {
  name: string;
  url: string;
}

export interface PokemonListResponseI {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonListI[];
}
