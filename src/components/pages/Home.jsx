import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pricingActions from '../../actions/pricing';
import * as itemDetailsActions from '../../actions/itemDetails';
import PurchaseSummary from '../widgets/PurchaseSummary';

class HomePage extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.pricing.get();
    actions.itemDetails.get();
  }

  render() {
    const { itemDetails, pricing } = this.props;
    return (
      <div className="checkout-page">
        <PurchaseSummary
          {...this.props}
          itemDetails={itemDetails}
          pricing={pricing}
        />
      </div>
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
