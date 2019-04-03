import getItemsDetails from '../apis/itemDetails';
import { GET_ITEM_DETAILS } from '../constants/actionTypes';

const success = data => ({
  type: GET_ITEM_DETAILS, data,
});

export function get(data) {
  return dispatch => getItemsDetails(data).then((response) => {
    dispatch(success(response.data));
  }).catch((error) => {
    throw (error);
  });
}
