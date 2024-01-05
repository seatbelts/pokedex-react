import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { Link } from 'react-router-dom';

import { PokemonListI } from '../../interfaces/pokemon-list.interface';
import Loader from '../Loader/Loader';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([] as PokemonListI[]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [totalCount, setTotalCount] = useState<number>(100);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPokemonDetails(
    pokemons: NamedAPIResourceList
  ): Promise<Pokemon[]> {
    return Promise.all(
      pokemons.results.map(async (results: NamedAPIResource) => {
        const { data }: AxiosResponse<Pokemon> = await axios.get<Pokemon>(
          results.url
        );
        return data;
      })
    );
  }

  async function fetchPokemonList(
    url = 'https://pokeapi.co/api/v2/pokemon/?limit=12'
  ): Promise<void> {
    const { data }: AxiosResponse<NamedAPIResourceList> =
      await axios.get<NamedAPIResourceList>(url);
    const pokemons = await fetchPokemonDetails(data);

    const details: PokemonListI[] = data.results.map(
      (result: NamedAPIResource, index: number) => {
        return {
          ...result,
          details: pokemons[index],
        };
      }
    );
    setNextUrl(data.next ?? '');
    setPokemonList((current) => {
      return [...current, ...details];
    });

    setIsLoading(false);

    if (totalCount === 100) {
      setTotalCount(data.count);
    }
  }

  window.onscroll = () => {
    if (pokemonList.length > totalCount) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLoading
    ) {
      void fetchPokemonList(nextUrl);
    }
  };

  useEffect(() => {
    void fetchPokemonList();
  }, []);

  return (
    <div className="container min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {pokemonList.map((pokemon: PokemonListI, index: number) => {
            return (
              <Link key={index} to={`/details/${pokemon.name}`}>
                <PokemonCard key={index} {...pokemon} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
