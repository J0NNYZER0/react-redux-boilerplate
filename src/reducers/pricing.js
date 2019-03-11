import { GET_PRICING, APPLY_PROMO_DISCOUNT } from '../constants/actionTypes';
import applyPromoDiscount from '../utils/discount';
import initialState from './initialState';

export default function pricingReducer(state = initialState.pricing, action) {
  switch (action.type) {
    case GET_PRICING:
      return { ...state, ...action.data };

    case APPLY_PROMO_DISCOUNT: {
      return {
        ...state,
        appliedDiscount: true,
        subtotal: applyPromoDiscount(action.promoCode, action.subtotal),
      };
    }

    default:
      return state;
  }
}
