// pokemon action types
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';
export const SET_POKEMON_ERROR = 'SET_POKEMON_ERROR';
export const CLEAR_POKEMON_ERROR = 'CLEAR_POKEMON_ERROR';

// UI action types
export const SET_POKEMON_SEARCH_TEXT = 'SET_POKEMON_SEARCH_TEXT';

// endpoint for https://pokeapi.co/
export const POKEAPI_ENDPOINT = 'http://pokeapi.co/api/v2';

// used as error for any 404 responses
export const FETCH_NOT_FOUND_MESSAGE = 'Sorry, that Pokémon does not exist.';
// used as error for any other 2xx responses from fetch calls
export const FETCH_ERROR_MESSAGE = 'Sorry, Pokémon information not available right now. Try again soon.';
