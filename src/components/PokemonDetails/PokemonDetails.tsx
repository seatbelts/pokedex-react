import axios, { AxiosResponse } from 'axios';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetailTable from '../PokemonDetailTable/PokemonDetailTable';
import StatsTable from '../StatsTable/StatsTable';
import Loader from '../Loader/Loader';
import PokemonVideo from '../PokemonVideo/PokemonVideo';

/**
 * @description This component renders details page with more info about a Pokemon.
 *
 * @function PokemonDetails A react component
 * @returns {ReactNode} A React element that renders detail page of a Pokemon.
 */
const PokemonDetails = () => {
  let { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  pokemonName = pokemonName ?? 'unknown';

  useEffect(() => {
    void fetchPokemonByName();

    /**
     * This function retrieves the data regrading a specific Pokemon, and set the appropiate states.
     *
     * @returns {Promise<void>} Fetches a promise.
     */
    async function fetchPokemonByName(): Promise<void> {
      const response: AxiosResponse<Pokemon> = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName ?? 'unknown'}`
      );
      setPokemon(response.data);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2">
          <PokemonDetailTable {...pokemon} />
          <div className="container grid grid-flow-row auto-rows-max">
            <StatsTable {...pokemon} />

            <PokemonVideo {...pokemon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
