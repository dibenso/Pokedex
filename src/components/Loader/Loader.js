import React, { PropTypes, Component } from 'react';
import { GridLoader } from 'halogen';

export class Loader extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  render() {
    const color = '#4DAF7C';

    return (
      <div>
        {this.props.loading && (
          <div className="loader-container">
            <div className="loader">
              <GridLoader color={color} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Loader;
