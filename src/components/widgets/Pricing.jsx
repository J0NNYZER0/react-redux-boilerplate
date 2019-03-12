import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

const Pricing = ({ pricing }) => {
  const tootTipText = 'Picking up your order in the store helps cut costs, and we pass the saving onto you.';
  return (
    <div className="pricing">
      <div className="subtotal">
        <div>Subtotal</div>
        <div>
          {`$ ${pricing.subtotal}`}
        </div>
      </div>
      <Tooltip defaultText="Pickup Savings" toolTipText={tootTipText}>
        <div className="pickup-saving">-$3.85</div>
      </Tooltip>
      <div className="taxes">
        <div>Est. taxes & fees</div>
        <div>8.92</div>
      </div>
      <div className="zipcode">
        <span>(Based on 95132)</span>
      </div>
      <div className="border" />
      <div className="estimated-total">
        <div>Est. total</div>
        <div>$108.03</div>
      </div>
    </div>
  );
};


Pricing.propTypes = {
  pricing: PropTypes.shape({}).isRequired,
};

export default Pricing;
