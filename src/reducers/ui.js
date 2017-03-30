import { SET_POKEMON_SEARCH_TEXT} from '../constants'

const initialState = {
  pokemonSearchText: ""
}
const ui = (state=initialState, action) => {
  switch(action.type) {
    case SET_POKEMON_SEARCH_TEXT:
      return {
        ...state,
        pokemonSearchText: action.pokemonSearchText
      };

    default:
      return state;
  }
}

export default ui;