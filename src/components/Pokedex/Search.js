import React, { Component, PropTypes } from 'react';
import { Typeahead } from 'react-typeahead';
import pokemon from '../../unsortedPokemon.json';
import './Search.css';

class Search extends Component {
  static propTypes = {
    fetchPokemon: PropTypes.func.isRequired,
    setPokemonSearchText: PropTypes.func.isRequired,
    pokemonSearchText: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <Typeahead
          options={pokemon}
          placeholder="Enter pokemon name here..."
          inputProps={{
            id: 'search-input'
          }}
          onKeyDown={event => blurIfEnter(event)}
          onOptionSelected={event => blurSearchInput()}
          maxVisible={6} />
      </div>
    );
  }
}

function blurIfEnter(event) {
  if(checkEnterKey(event))
    blurSearchInput();
}

function checkEnterKey(event) {
  const charCode = event.which || event.keyCode;
  return charCode === 13;
}

function blurSearchInput() {
  document.querySelector('#search-input').blur();
}

export default Search;
