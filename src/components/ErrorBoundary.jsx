import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      currentError: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    if (error) return { hasError: true };
    return error;
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    window.rg4js('send', error);
    this.setState({
      currentError: error,
      errorInfo: info,
    });
  }

  render() {
    const { hasError, currentError, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
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
