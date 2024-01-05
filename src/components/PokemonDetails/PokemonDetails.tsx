import axios, { AxiosResponse } from 'axios';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetailTable from '../PokemonDetailTable/PokemonDetailTable';
import StatsTable from '../StatsTable/StatsTable';
import Loader from '../Loader/Loader';

const PokemonDetails = () => {
  let { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  pokemonName = pokemonName ?? 'unknown';

  useEffect(() => {
    void fetchPokemonByName();

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

          <StatsTable {...pokemon} />
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
