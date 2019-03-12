import React from 'react';
import PropTypes from 'prop-types';
import Form from '../forms/Index';
import ContentToggle from './ContentToggle';
import Pricing from './Pricing';
import ItemDetails from './ItemDetails';

const PurchaseSummary = ({ actions, itemDetails, pricing }) => (
  <div className="purchase-summary">
    <Pricing pricing={pricing} />
    <ContentToggle showText="See Item Details" hideText="Hide Item Details">
      <ItemDetails itemDetails={itemDetails} />
    </ContentToggle>
    <div className="border" />
    <ContentToggle showText="Apply Promo Code" hideText="Hide Promo Code">
      <div className="promo-code">
        <div>Promo code</div>
        <Form
          submitHandler={actions.pricing.applyPromoDiscount}
          disableButton={pricing.appliedDiscount || false}
          subTotal={parseInt(pricing.subtotal, 10) || 0}
        />
      </div>
    </ContentToggle>
  </div>
);


PurchaseSummary.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  itemDetails: PropTypes.shape({}).isRequired,
  pricing: PropTypes.shape({}).isRequired,
};

export default PurchaseSummary;
