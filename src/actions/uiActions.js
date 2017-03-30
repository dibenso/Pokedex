import { SET_POKEMON_SEARCH_TEXT } from '../constants';

export const setPokemonSearchText = pokemonSearchText => ({
  type: SET_POKEMON_SEARCH_TEXT,
  pokemonSearchText
});
