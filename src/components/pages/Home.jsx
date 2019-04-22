import React from 'react';
import PropTypes from 'prop-types';
import Page from '../chat/Page';

const HomePage = () => (
  <Page>
    <div>Home</div>
  </Page>
);

HomePage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
};

export default HomePage;
