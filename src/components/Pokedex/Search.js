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
          onKeyUp={event => {
            const actions = {
              setPokemonSearchText: this.props.setPokemonSearchText
            };
            handleKeyUp(event, this.props.pokemonSearchText, actions);
          }}
          onOptionSelected={event => {
            const actions = {
              setPokemonSearchText: this.props.setPokemonSearchText,
              fetchPokemon: this.props.fetchPokemon
            };
            handleSelect(event, actions);
          }}
          maxVisible={6} />
      </div>
    );
  }
}

function handleKeyUp(event, pokemonSearchText, actions={}) {
  const { setPokemonSearchText } = actions;
  const inputValue = getInputValue();

  blurIfEnter(event);

  if(inputValue === pokemonSearchText)
    return;

  setPokemonSearchText(inputValue);
}

function handleSelect(event, actions={}) {
  const { setPokemonSearchText,
          fetchPokemon } = actions;

  const inputValue = getInputValue();
  setPokemonSearchText(inputValue);
  fetchPokemon(inputValue.toLowerCase());
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

function getInputValue() {
  return document.querySelector('#search-input').value;
}

export default Search;
