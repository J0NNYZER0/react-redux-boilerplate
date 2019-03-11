import React from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({ itemDetails }) => (
  <div className="item-details">
    <div>
      <img alt="" src={itemDetails.item_image} width="75" />
    </div>
    <div>
      <div className="item-name">
        {itemDetails.item_name}
      </div>
      <div className="price-qty">
        <div className="item-price">
              $
          {itemDetails.item_price}
        </div>
        <div className="item-qty">
              Qty: 1
        </div>
      </div>
      <div className="item-list-price">
            $
        {itemDetails.item_list_price}
      </div>
    </div>
  </div>
);


ItemDetails.propTypes = {
  itemDetails: PropTypes.shape({}).isRequired,
};

export default ItemDetails;
