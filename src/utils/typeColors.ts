import { PokemonType } from 'pokenode-ts';
import { colors } from '../styles/colors';

export const getTypeColor = (pokemonType: string): string => {
  const type: string = pokemonType;

  switch (type) {
    case 'normal':
      return colors.NORMAL;
    case 'fighting':
      return colors.FIGHTING;
    case 'flying':
      return colors.FLYING;
    case 'poison':
      return colors.POISON;
    case 'ground':
      return colors.GROUND;
    case 'rock':
      return colors.ROCK;
    case 'bug':
      return colors.BUG;
    case 'ghost':
      return colors.GHOST;
    case 'steel':
      return colors.STEEL;
    case 'fire':
      return colors.FIRE;
    case 'water':
      return colors.WATER;
    case 'grass':
      return colors.GRASS;
    case 'electric':
      return colors.ELECTRIC;
    case 'psychic':
      return colors.PSYCHIC;
    case 'ice':
      return colors.ICE;
    case 'dragon':
      return colors.DRAGON;
    case 'dark':
      return colors.DARK;
    case 'fairy':
      return colors.FAIRY;
    case 'unknown':
    case 'shadow':
      return colors.UNKNOWN;
    default:
      return colors.DEFAULT;
  }
};
