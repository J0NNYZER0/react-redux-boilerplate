import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routesActions from '../actions/routes';
import * as chatActions from '../actions/chat';
import ContentToggle from './widgets/ContentToggle';
import Navigation from './widgets/Navigation';
import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.routes.get();
    actions.chat.get();
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
  chat: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
    routes: state.routes,
    chat: state.chat,
  }),


  mapDispatchToProps = dispatch => ({
    actions: {
      routes: bindActionCreators(routesActions, dispatch),
      chat: bindActionCreators(chatActions, dispatch),
    },
  });

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
