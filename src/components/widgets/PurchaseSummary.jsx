import React from 'react';
import PropTypes from 'prop-types';
import Pricing from './Pricing';

const PurchaseSummary = ({
  children, pricing,
}) => (
  <section className="purchase-summary">
    <Pricing pricing={pricing} />
    {children}
  </section>
);

PurchaseSummary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  pricing: PropTypes.shape({}).isRequired,
};

export default PurchaseSummary;
