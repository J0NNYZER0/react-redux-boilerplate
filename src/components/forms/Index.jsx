import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '../inputs/InputLabel';
import TextInput from '../inputs/Text';
import ButtonInput from '../inputs/Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promoCode: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ promoCode: e.target.value });
  }

  handleOnKeyPress(e) {
    e.preventDefault();

    if (e.key === 'Enter') {
      console.log('do validate');
    }

  }

  /*handleSubmit() {
    const { submitHandler, subTotal } = this.props,
      { promoCode } = this.state;

    if (promoCode !== '') {
      submitHandler(promoCode, subTotal);
    }
  }*/

  render() {
    const { disableButton } = this.props,
      { promoCode } = this.state;

    return (
      <form className="form-group">
        <InputLabel htmlFor="promoCode" labelText="Promo code">
          <TextInput
            defaultValue={promoCode}
            id="promoCode"
            inputName="promoCode"
            onChangeHandler={this.handleOnChange}
            onKeyPressHandler={this.handleOnKeyPress}
          />
        </InputLabel>
      </form>
    );
  }
}

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
  subTotal: PropTypes.number.isRequired,
};

export default Form;
