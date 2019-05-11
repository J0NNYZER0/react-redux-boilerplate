import { SEARCH_USERS } from '../constants/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, ...action.data };

    default:
      return state;
  }
}
