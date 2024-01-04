import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  PokemonListI,
  PokemonListResponseI,
} from '../../interfaces/pokemon-list.interface';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([] as PokemonListI[]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [previousUrl, setPreviousUrl] = useState<string>('');
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    void fetchPokemonList();

    function fetchPokemonList(): void {
      axios
        .get<PokemonListResponseI>(
          'https://pokeapi.co/api/v2/pokemon/?limit=40'
        )
        .then(({ data }: AxiosResponse<PokemonListResponseI>) => {
          setPokemonList(data.results);
        })
        .catch((error) => console.error(error));
    }
  }, [scroll]);

  return (
    <div>
      {
        <div>
          {pokemonList.map((pokemon) => {
            return <p key={pokemon.name}>{pokemon.name}</p>;
          })}
        </div>
      }
    </div>
  );
};

export default PokemonList;
