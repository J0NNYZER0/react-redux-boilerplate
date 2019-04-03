import React from 'react';
import PropTypes from 'prop-types';
import Page from '../cms/Page';
import PurchaseSummary from '../widgets/PurchaseSummary';
import ContentToggle from '../widgets/ContentToggle';
import Border from '../widgets/Border';
import ItemDetails from '../widgets/ItemDetails';
import Form from '../forms/Index';

const ExamplesPage = ({ actions, itemDetails, pricing }) => (
  <Page>
    <PurchaseSummary
      itemDetails={itemDetails}
      pricing={pricing}
    >
      <ContentToggle showText="See Item Details" hideText="Hide Item Details">
        <ItemDetails itemDetails={itemDetails || {}} />
      </ContentToggle>
      <Border />
      <ContentToggle showText="Apply Promo Code" hideText="Hide Promo Code">
        <Form
          submitHandler={actions.pricing.applyPromoDiscount || {}}
          disableButton={pricing.appliedDiscount || false}
          subTotal={parseInt(pricing.subtotal, 10) || 0}
        />
      </ContentToggle>
    </PurchaseSummary>
  </Page>
);

ExamplesPage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  itemDetails: PropTypes.shape({}).isRequired,
  pricing: PropTypes.shape({}).isRequired,
};

export default ExamplesPage;
