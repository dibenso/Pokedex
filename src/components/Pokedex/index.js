import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';

class PokedexContainer extends Component {
  render() {
    return (
      <Pokedex {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.pokemon
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
