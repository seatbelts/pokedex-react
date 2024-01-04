import axios, { AxiosResponse } from 'axios';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetailTable from '../PokemonDetailTable/PokemonDetailTable';
import NoData from '../NoData/NoData';
import StatsTable from '../StatsTable/StatsTable';

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
      {!isLoading ? (
        <div className="grid grid-cols-2">
          <PokemonDetailTable {...pokemon} />

          <StatsTable {...pokemon} />
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default PokemonDetails;
