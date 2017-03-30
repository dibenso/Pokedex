import React, { Component, PropTypes } from 'react';
import { Typeahead } from 'react-typeahead';
import pokemon from '../../unsortedPokemon.json';
import './Search.css';

class Search extends Component {
  static propTypes = {
    fetchPokemon: PropTypes.func.isRequired,
    setPokemonSearchText: PropTypes.func.isRequired,
    setPokemonError: PropTypes.func.isRequired,
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
          customClasses={{
            results: 'results'
          }}
          onKeyUp={this.handleKeyUp.bind(this)}
          onOptionSelected={this.handleSelect.bind(this)}
          maxVisible={6} />
      </div>
    );
  }

  handleKeyUp(event) {
    const inputValue = getInputValue();

    if(checkEnterKey(event))
      this.handleEnterKey(inputValue);
    else
      this.handleOtherKey(inputValue);
  }

  handleEnterKey(inputValue) {
    blurSearchInput();

    if(pokemonExists(inputValue))
      this.props.fetchPokemon(inputValue);
    else
      this.props.setPokemonError(`\`${inputValue}\` is not a Pokémon.`);
  }

  handleOtherKey(inputValue) {
    if(inputValue === this.props.pokemonSearchText)
      return;
    else
      this.props.setPokemonSearchText(inputValue);
  }

  handleSelect(event) {
    blurSearchInput();

    const inputValue = getInputValue();
    this.props.setPokemonSearchText(inputValue);
    this.props.fetchPokemon(inputValue);
  }
}

function pokemonExists(pokemonName) {
  return pokemon.find(name => {
    return name.toLowerCase() === pokemonName.toLowerCase();
  });
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
