import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};
export default Root;
