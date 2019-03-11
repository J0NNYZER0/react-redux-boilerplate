import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentError: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({
      currentError: error,
      errorInfo: info,
    });
  }

  render() {
    const { currentError, errorInfo } = this.state;
    const { children } = this.props;

    if (currentError) {
      console.log('currentError', currentError);
      // You can render any custom fallback UI
      return (
        <div className="error">
          <h1>Something went wrong.</h1>
          <div>{currentError}</div>
          <div>{errorInfo}</div>
        </div>
      );
    }

    return children;
  }
};

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
