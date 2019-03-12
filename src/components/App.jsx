import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from './pages/Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);

export default hot(module)(App);
