import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/search';
import Logo from '../widgets/Image';
import imgSrc from '../../../assets/images/github-logo.svg';
import SearchForm from '../forms/SearchForm';

const SearchPage = () => (
  <main className="search-page">
    <Logo
      alt="GitHub Octocat"
      classNames="logo"
      source={imgSrc}
      width="100"
    />
    <br />
    <br />
    <SearchForm />
  </main>
);

SearchPage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  search: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  search: state.search,
});


const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(searchActions, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
