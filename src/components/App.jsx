import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from './pages/Home';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default hot(module)(App);
