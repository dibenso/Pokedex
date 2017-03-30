import { startPokemonFetch,
         successPokemonFetch,
         failPokemonFetch } from '../pokemonActions';
import { POKEAPI_ENDPOINT } from '../../constants';
import { checkStatus, parseJSON } from './util';

const fetchPokemonAPICall = nameOrId => {
  const searchItem = isString(nameOrId) ? nameOrId.toLowerCase() : nameOrId;

  return dispatch => {
    dispatch(startPokemonFetch());

    return fetch(`${POKEAPI_ENDPOINT}/pokemon-species/${searchItem}`)
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      const name = getNameByLanguage(json.names);
      const description = getDescriptionByLanguage(json.flavor_text_entries);

      return dispatch(successPokemonFetch({name, description}));
    })
    .catch(error => dispatch(failPokemonFetch(error.message)));
  }
};

// Used to get the description of a pokemon from a json response 
function getDescriptionByLanguage(descriptions, language="en") {
  return descriptions.find(description =>
    description.language.name === language
  ).flavor_text.replace(/(\r\n|\n|\r)/gm,"");
}

// Used to get the name of a pokemon from a json response
function getNameByLanguage(names, language="en") {
  return names.find(name =>
    name.language.name === language
  ).name;
}

// check if search item is a string
function isString(val) {
  return (typeof val === 'string' || typeof val === 'object');
}

export default fetchPokemonAPICall;