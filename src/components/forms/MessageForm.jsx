import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../inputs/Text';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promoCode: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnChange(e) {
    this.setState({ promoCode: e.target.value });
  }

  handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      console.log('do validate', e.target.value);
    }
  }

  render() {
    const { disableButton } = this.props,

      { promoCode } = this.state;

    return (
        <TextInput
          id="promoCode"
          defaultValue={promoCode}
          inputName="promoCode"
          onChangeHandler={this.handleOnChange}
          onKeyDownHandler={this.handleOnKeyDown}
        />
    );
  }
}

MessageForm.propTypes = {
};

export default MessageForm;
