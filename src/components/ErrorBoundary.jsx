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

    if (window.rg4js) {
      window.rg4js('send', error);
    }
  }

  render() {
    const { currentError, errorInfo } = this.state;
    const { children } = this.props;

    if (currentError) {
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
