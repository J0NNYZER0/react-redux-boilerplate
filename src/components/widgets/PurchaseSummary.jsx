import React from 'react';
import PropTypes from 'prop-types';
import Pricing from './Pricing';

const PurchaseSummary = ({
  children, pricing,
}) => (
  <div className="purchase-summary">
    <Pricing pricing={pricing} />
    {children}
  </div>
);

PurchaseSummary.propTypes = {
  children: PropTypes.shape([]).isRequired,
  pricing: PropTypes.shape({}).isRequired,
};

export default PurchaseSummary;
