import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';
import pokemon from '../../pokemon.json';
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
        <Autocomplete
          value={this.props.pokemonSearchText}
          inputProps={{name: "Pokemon", id: "pokemon-autocomplete"}}
          items={pokemon}
          getItemValue={item => item}
          onChange={(event, value) => this.props.setPokemonSearchText(value)}
          onSelect={value => this.props.setPokemonSearchText(value)}
          renderItem={(item, isHighlighted) => (
            <p>{item.name}</p>
          )}
        />
      </div>
    );
  }
}

export default Search;
