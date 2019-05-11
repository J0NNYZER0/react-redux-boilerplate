import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeSuggestion from '../../utils/search';
import TextInput from '../inputs/TextInput';
import ButtonInput from '../inputs/Button';
import TypeAhead from '../widgets/typeahead/Index';
import users from '../../mockData/users.json';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit() {
    const { searchTerm } = this.state;

    if (searchTerm !== '') {
      makeSuggestion(searchTerm);
    }
  }

  render() {
    const { disableButton } = this.props;
    const { searchTerm } = this.state;

    return (
      <form className="search-form">
        <TextInput
          classNames="search-input"
          inputName="search"
          onChangeHandler={this.handleOnChange}
          value={searchTerm}
        />
        <TypeAhead limit={10} suggestions={users.data.items} />
        <ButtonInput
          buttonText="Search"
          classNames="search-button"
          disableButton={disableButton}
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  disableButton: PropTypes.bool.isRequired,
};

export default SearchForm;
