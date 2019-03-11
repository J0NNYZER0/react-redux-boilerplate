import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../inputs/Text';
import ButtonInput from '../inputs/Button';

class PromoCodeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promoCode: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ promoCode: e.target.value });
  }

  handleSubmit() {
    const { applyPromoDiscount, subTotal } = this.props;
    const { promoCode } = this.state;

    if (promoCode !== '') {
      applyPromoDiscount(promoCode, subTotal);
    }
  }

  render() {
    const { disableButton } = this.props;
    const { promoCode } = this.state;

    return (
      <form className="promo-code-form">
        <TextInput
          defaultValue={promoCode}
          inputName="promoCode"
          onChangeHandler={this.handleOnChange}
        />
        <ButtonInput
          buttonText="Apply"
          classNames="apply-promo-code"
          disableButton={disableButton}
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

PromoCodeForm.propTypes = {
  applyPromoDiscount: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
  subTotal: PropTypes.number.isRequired,
};

export default PromoCodeForm;
