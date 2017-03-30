import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';
import Search from '../Search';
import ErrorIndicator from '../ErrorIndicator';
import { fetchPokemonAPICall as fetchPokemon,
         setPokemonError } from '../../actions/pokemonActions';
import { setPokemonSearchText } from '../../actions/uiActions';

class PokedexContainer extends Component {
  static propTypes = {
    fetchPokemon: PropTypes.func.isRequired,
    setPokemonSearchText: PropTypes.func.isRequired,
    setPokemonError: PropTypes.func.isRequired,
    pokemonSearchText: PropTypes.string.isRequired,
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const searchProps = {
      fetchPokemon: this.props.fetchPokemon,
      setPokemonSearchText: this.props.setPokemonSearchText,
      setPokemonError: this.props.setPokemonError,
      pokemonSearchText: this.props.pokemonSearchText,
    };

    return (
      <div>
        <Search {...searchProps} />
        <ErrorIndicator error={this.props.pokemon.error} />
        <Pokedex pokemon={this.props.pokemon} />
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
    setPokemonError
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
