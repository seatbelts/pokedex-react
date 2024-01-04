/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { capitalize } from '../../utils/capitaliza';

import { Pokemon, PokemonType } from 'pokenode-ts';

const PokemonCard = ({ pokemon }: any) => {
  const [pokemonDetails, setPokemonDetails] = useState({} as Pokemon);

  useEffect(() => {
    void fetchPokemonDetail();

    async function fetchPokemonDetail(): Promise<void> {
      const response: AxiosResponse<Pokemon> = await axios.get<Pokemon>(
        pokemon.url
      );
      setPokemonDetails(response.data);
    }
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={pokemonDetails?.sprites?.front_default || ''}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{capitalize(pokemon.name)}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {pokemonDetails?.types?.map((type: PokemonType, index: number) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {type?.type?.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
