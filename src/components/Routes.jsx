import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import CmsPage from './pages/Cms';
import ExamplesPage from './pages/Examples';

const Routes = ({
  actions, itemDetails, cms, pricing,
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
      path="/cms"
      render={() => (
        <CmsPage
          cmsActions={actions.cms}
          cms={cms}
        />
      )}
    />
    <Route
      exact
      path="/examples"
      render={() => (
        <ExamplesPage
          actions={actions}
          itemDetails={itemDetails}
          pricing={pricing}
        />
      )}
    />
  </Switch>
);

Routes.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  cms: PropTypes.shape({}).isRequired,
  itemDetails: PropTypes.shape({}).isRequired,
  pricing: PropTypes.shape({}).isRequired,
};

export default Routes;
