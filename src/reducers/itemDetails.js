import { GET_ITEM_DETAILS } from '../constants/actionTypes';
import initialState from './initialState';

export default function pricingReducer(state = initialState.itemDetails, action) {
  switch (action.type) {
    case GET_ITEM_DETAILS:
      return { ...state, ...action.data };

    default:
      return state;
  }
}
