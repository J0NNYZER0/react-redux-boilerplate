import { GET_ROUTES } from '../constants/actionTypes';
import initialState from './initialState';

export default function routesReducer(state = initialState.routes, action) {
  switch (action.type) {
    case GET_ROUTES:
      return [ ...state, ...action.data ];

    default:
      return state;
  }
}
