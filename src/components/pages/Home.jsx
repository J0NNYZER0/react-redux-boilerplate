import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pricingActions from '../../actions/pricing';
import * as itemDetailsActions from '../../actions/itemDetails';
import PurchaseSummary from '../widgets/PurchaseSummary';
import ContentToggle from '../widgets/ContentToggle';
import Border from '../widgets/Border';
import ItemDetails from '../widgets/ItemDetails';
import Form from '../forms/Index';

class HomePage extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.pricing.get();
    actions.itemDetails.get();
  }

  render() {
    const { actions, itemDetails, pricing } = this.props;
    return (
      <PurchaseSummary
        itemDetails={itemDetails}
        pricing={pricing}
      >
        <ContentToggle showText="See Item Details" hideText="Hide Item Details">
          <ItemDetails itemDetails={itemDetails} />
        </ContentToggle>
        <Border />
        <ContentToggle showText="Apply Promo Code" hideText="Hide Promo Code">
          <Form
            submitHandler={actions.pricing.applyPromoDiscount}
            disableButton={pricing.appliedDiscount || false}
            subTotal={parseInt(pricing.subtotal, 10) || 0}
          />
        </ContentToggle>
      </PurchaseSummary>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  pricing: PropTypes.shape({}).isRequired,
  itemDetails: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  pricing: state.pricing,
  itemDetails: state.itemDetails,
});


const mapDispatchToProps = dispatch => ({
  actions: {
    pricing: bindActionCreators(pricingActions, dispatch),
    itemDetails: bindActionCreators(itemDetailsActions, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
