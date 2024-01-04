/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pokemon, PokemonAbility, PokemonType } from 'pokenode-ts';
import { getTypeColor } from '../../utils/typeColors';
import { capitalize } from '../../utils/capitaliza';

const PokemonDetailTable = (pokemon: Pokemon) => {
  const globalType = pokemon?.types[0]?.type?.name;

  return (
    <div
      className="container grid grid-flow-row auto-rows-max w-2/4 text-center p-2"
      style={{
        backgroundColor: getTypeColor(globalType ?? ''),
      }}
    >
      <div className="my-4 rounded-full bg-white">
        <h2 className="text-4xl">{capitalize(pokemon.name)}</h2>
      </div>
      <div className="mb-4 rounded-full bg-white">
        <img
          className="w-full"
          src={
            pokemon?.sprites?.other?.['official-artwork'].front_default || ''
          }
          alt="pokemon sprite"
        />
      </div>

      <div className="px-6 pt-4 pb-2 bg-white rounded-full">
        <h4 className="pb-1">Type(s)</h4>
        {pokemon?.types?.map((type: PokemonType, index: number) => {
          return (
            <span
              key={index}
              style={{
                backgroundColor: getTypeColor(type?.type?.name ?? ''),
              }}
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              {capitalize(type?.type?.name)}
            </span>
          );
        })}
      </div>

      <div className="my-4 rounded-full bg-white">
        <h4>Abilities</h4>
        <div className="grid grid-cols-2 py-2">
          {pokemon.abilities.map((ability: PokemonAbility) => {
            return (
              <p key={ability.ability.name}>
                {capitalize(ability.ability.name)}
              </p>
            );
          })}
        </div>
      </div>

      <div className="my-4 rounded-full bg-white">
        <div className="grid grid-cols-2 py-2">
          <div className="grid grid-flow-row auto-rows-max">
            <div>
              <h4>Height</h4>
            </div>
            <div>
              <h4>{pokemon.height}0 cm</h4>
            </div>
          </div>
          <div className="grid grid-flow-row auto-rows-max">
            <div>
              <h4>Weight</h4>
            </div>
            <div>
              <h4>{pokemon.weight}00 gr</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 rounded-lg bg-white">
        <div className="grid grid-flow-row auto-rows-max">
          <h4>Front Sprites</h4>
          <div className="grid grid-cols-2 py-2">
            <img
              className="w-full"
              src={pokemon?.sprites.front_default || ''}
              alt="{sprite} sprite"
            />
            <img
              className="w-full"
              src={pokemon?.sprites.back_default || ''}
              alt="{sprite} sprite"
            />
          </div>
          <h4>Back Sprites</h4>
          <div className="grid grid-cols-2 py-2">
            <img
              className="w-full"
              src={pokemon?.sprites.front_shiny || ''}
              alt="{sprite} sprite"
            />
            <img
              className="w-full"
              src={pokemon?.sprites.back_shiny || ''}
              alt="{sprite} sprite"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailTable;
