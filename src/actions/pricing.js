import getPricing from '../apis/pricing';
import { GET_PRICING, APPLY_PROMO_DISCOUNT } from '../constants/actionTypes';

const success = data => ({
  type: GET_PRICING, data,
});

export function get(data) {
  return dispatch => getPricing(data).then((response) => {
    dispatch(success(response.data));
  }).catch((error) => {
    throw (error);
  });
}

export const applyPromoDiscount = (promoCode, subtotal) => ({
  type: APPLY_PROMO_DISCOUNT,
  promoCode,
  subtotal,
});
