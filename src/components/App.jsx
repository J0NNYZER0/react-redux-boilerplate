import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import SearchPage from './pages/Search';

const App = () => (
  <Switch>
    <Route exact path="/" component={SearchPage} />
  </Switch>
);

export default hot(module)(App);
