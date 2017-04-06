import React, { PropTypes, Component } from 'react';
import styles from './styles'

export class Loader extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        <div>
          {loading && (
            <div className="loader">
            </div>
          )}
        </div>
        <style>{styles}</style>
      </div>
    );
  }
}

export default Loader;
