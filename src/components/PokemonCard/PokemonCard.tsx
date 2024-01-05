import { useState } from 'react';
import { capitalize } from '../../utils/capitaliza';

import { Pokemon, PokemonType } from 'pokenode-ts';
import { getTypeColor } from '../../utils/typeColors';
import { PokemonListI } from '../../interfaces/pokemon-list.interface';

/**
 * @description This component renders a card with small details regarding the pokemon.
 *
 * @function PokemonCard A react component
 * @param {PokemonListI} pokemon Pokemon details mapped accordingly.
 * @returns {ReactNode} A React element that renders a greeting to the user.
 */
const PokemonCard = (pokemon: PokemonListI) => {
  const [pokemonDetails] = useState<Pokemon>(pokemon.details);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      style={{
        backgroundColor: getTypeColor(
          pokemonDetails?.types[0]?.type?.name ?? ''
        ),
      }}
    >
      <div>
        <img
          className="w-full"
          src={pokemonDetails?.sprites?.front_default || ''}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {capitalize(pokemon.name)}
          </div>
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
    </div>
  );
};

export default PokemonCard;
