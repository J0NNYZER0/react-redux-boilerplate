import React from 'react';
import PropTypes from 'prop-types';
import Page from '../cms/Page';

const HomePage = () => (
  <Page>
    <div>Home</div>
  </Page>
);

HomePage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
};

export default HomePage;
