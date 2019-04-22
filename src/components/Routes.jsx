import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ChatPage from './pages/Chat';

const Routes = ({
  actions, chat,
}) => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <HomePage
          actions={actions}
        />
      )}
    />
    <Route
      exact
      path="/chat"
      render={() => (
        <ChatPage
          chatActions={actions.chat}
          chat={chat}
        />
      )}
    />
  </Switch>
);

Routes.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  chat: PropTypes.shape({}).isRequired,
};

export default Routes;
