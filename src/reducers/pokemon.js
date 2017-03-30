import { FETCH_POKEMON_START,
         FETCH_POKEMON_SUCCESS,
         FETCH_POKEMON_FAIL,
         SET_POKEMON_ERROR
       } from '../constants'

// Bulbasaur is the first pokemon, so the Pokedex
// will initially contain information about Bulbasaur
const initialState = {
  name: 'Bulbasaur',
  description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.',
  fetching: false,
  error: null       // contains an error if there was an error while fetching
}
const pokemon = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        fetching: true
      };

    case FETCH_POKEMON_SUCCESS:
      const { name, description } = action.pokemon;

      return {
        ...state,
        name,
        description,
        fetching: false,
        error: null
      };

    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    case SET_POKEMON_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

export default pokemon;