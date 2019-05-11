'use strict';
import * as api from '../apis/search';
import { SEARCH_USERS } from '../constants/actionTypes';

const success = data => ({
  type: SEARCH_USERS, data,
});

const searchUsers = (data) => {
  return dispatch => api.searchUsers(data).then((response) => {
    dispatch(success(response.data));
  }).catch((error) => {
    throw (error);
  });
}

export {
  searchUsers
}
