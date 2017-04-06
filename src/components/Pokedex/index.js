import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';
import Search from '../Search';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';
import { fetchPokemonAPICall as fetchPokemon,
         setPokemonError,
         clearPokemonError } from '../../actions/pokemonActions';
import { setPokemonSearchText } from '../../actions/uiActions';

class PokedexContainer extends Component {
  static propTypes = {
    fetchPokemon: PropTypes.func.isRequired,
    setPokemonSearchText: PropTypes.func.isRequired,
    setPokemonError: PropTypes.func.isRequired,
    clearPokemonError: PropTypes.func.isRequired,
    pokemonSearchText: PropTypes.string.isRequired,
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fetching: PropTypes.bool.isRequired
    }).isRequired
  }

  render() {
    const { fetchPokemon, setPokemonSearchText,
            setPokemonError, clearPokemonError,
            pokemonSearchText, pokemon
          } = this.props;

    const searchProps = {
      fetchPokemon,
      setPokemonSearchText,
      setPokemonError,
      clearPokemonError,
      pokemonSearchText,
      pokemonName: pokemon.name,
      fetchingPokemon: pokemon.fetching
    };

    return (
      <div>
        <Search {...searchProps} />
        <Loader loading={pokemon.fetching} />
        <ErrorIndicator error={pokemon.error} />
        <Pokedex pokemon={pokemon} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
    pokemonSearchText: state.ui.pokemonSearchText
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPokemon,
    setPokemonSearchText,
    setPokemonError,
    clearPokemonError
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
