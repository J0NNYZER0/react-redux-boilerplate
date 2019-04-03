import getRoutes from '../apis/routes';
import { GET_ROUTES } from '../constants/actionTypes';

const success = data => ({
  type: GET_ROUTES, data,
});

export function get(data) {
  return dispatch => getRoutes(data).then((response) => {
    dispatch(success(response.data));
  }).catch((error) => {
    throw (error);
  });
}
