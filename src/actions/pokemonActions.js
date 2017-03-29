import { FETCH_POKEMON_START,
         FETCH_POKEMON_SUCCESS,
         FETCH_POKEMON_FAIL } from '../constants';

export const startPokemonFetch = () => ({
  type: FETCH_POKEMON_START
});

export const successPokemonFetch = pokemon => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemon
});

export const failPokemonFetch = error => ({
  type: FETCH_POKEMON_FAIL,
  error
});
