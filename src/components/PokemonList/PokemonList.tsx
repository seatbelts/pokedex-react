import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import { NamedAPIResource, NamedAPIResourceList } from 'pokenode-ts';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([] as NamedAPIResource[]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [previousUrl, setPreviousUrl] = useState<string>('');
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    void fetchPokemonList();

    async function fetchPokemonList(): Promise<void> {
      const { data }: AxiosResponse<NamedAPIResourceList> =
        await axios.get<NamedAPIResourceList>(
          'https://pokeapi.co/api/v2/pokemon/?limit=20'
        );
      setPokemonList(data.results);
    }
  }, [scroll]);

  return (
    <div className="container">
      {
        <div className="grid grid-cols-3 gap-3">
          {pokemonList.map((pokemon: NamedAPIResource, index: number) => {
            return <PokemonCard key={index} pokemon={pokemon} />;
          })}
        </div>
      }
    </div>
  );
};

export default PokemonList;
