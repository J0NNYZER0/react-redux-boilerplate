import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routesActions from '../actions/routes';
import * as cmsActions from '../actions/cms';
import * as itemDetailsActions from '../actions/itemDetails';
import * as pricingActions from '../actions/pricing';
import ContentToggle from './widgets/ContentToggle';
import Navigation from './widgets/Navigation';
import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.routes.get();
    actions.cms.get();
    actions.pricing.get();
    actions.itemDetails.get();
  }

  render() {
    const {
      routes,
    } = this.props;
    return [
      <ContentToggle key="app-content-toggle" showText="Show menu" hideText="Hide menu">
        <Navigation routes={routes} />
      </ContentToggle>,
      <Routes
        key="app-routes"
        {...this.props}
      />,
    ];
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cms: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({}).isRequired,
  itemDetails: PropTypes.shape({}).isRequired,
  pricing: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
    routes: state.routes,
    cms: state.cms,
    itemDetails: state.itemDetails,
    pricing: state.pricing,
  }),


  mapDispatchToProps = dispatch => ({
    actions: {
      routes: bindActionCreators(routesActions, dispatch),
      cms: bindActionCreators(cmsActions, dispatch),
      itemDetails: bindActionCreators(itemDetailsActions, dispatch),
      pricing: bindActionCreators(pricingActions, dispatch),
    },
  });

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
