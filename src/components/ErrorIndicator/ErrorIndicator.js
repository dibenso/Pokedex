import React, { Component, PropTypes } from 'react';
import './ErrorIndicator.css';

class ErrorIndicator extends Component {
  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string
    })
  }

  render() {
    return (
      <div>
        {this.props.error && (
          <div className="error-container">
            {(this.props.error.name === 'Error') ? (
              <div>
                <p>Error: {this.props.error.message}</p>
              </div>
            ) : (
              <div>
                <p>{this.props.error.message}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ErrorIndicator;
