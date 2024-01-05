import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { Link } from 'react-router-dom';

import { PokemonListI } from '../../interfaces/pokemon-list.interface';
import Loader from '../Loader/Loader';

/**
 * @description This component renders a list of Pokemons.
 *
 * @returns {ReactNode} A React element that renders a table with list of Pokemons.
 */
const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([] as PokemonListI[]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [totalCount, setTotalCount] = useState<number>(100);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @description This function retrieves appropiate details of Pokemons based on their base url
   *
   * @function fetchPokemonDetails
   * @param {NamedAPIResourceList} pokemons A list of Pokemons resources
   * @returns {Promise<Pokemon[]>} A Promise containing Pokemon details
   */
  function fetchPokemonDetails(
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

  /**
   * @description This function retrieves a paginated list of Pokemons, and set the proper states with the results of fetchPokemonList
   *
   * @async
   * @function fetchPokemonList
   * @param {string} url A url, can be the next url, or fallback to a default url if not provide
   * @returns {Promise<void>} A Promise function
   */
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
  /**
   * @description This callback listens to a scroll change, and fetch new data on a proper scroll
   *
   * @callback window.onscroll
   * @returns {void} A void function
   */
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
