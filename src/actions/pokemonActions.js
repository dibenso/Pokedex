import { FETCH_POKEMON_START,
         FETCH_POKEMON_SUCCESS,
         FETCH_POKEMON_FAIL,
         SET_POKEMON_ERROR } from '../constants';
import { fetchPokemonAPICall } from './apiActions';

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

export const setPokemonError = message => {
  const error = { message };

  return {
    type: SET_POKEMON_ERROR,
    error
  }
}

export { fetchPokemonAPICall };
