import { FETCH_POKEMON_START,
         FETCH_POKEMON_SUCCESS,
         FETCH_POKEMON_FAIL
       } from '../constants'

// Bulbasaur is the first pokemon, so the Pokedex
// will initially contain information about Bulbasaur
export const initialState = {
  name: 'Bulbasaur',
  description: 'Bulbasaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.',
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

    default:
      return state;
  }
}

export default pokemon;