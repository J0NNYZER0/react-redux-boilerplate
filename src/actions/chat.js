import * as api from '../apis/chat';
import { GET_CMS, ADD_SECTION, REPOSITION_SECTION, ADD_AREA } from '../constants/actionTypes';

const success = data => ({
  type: GET_CMS, data,
}),
addSectionSuccess = data => ({
  type: ADD_SECTION, data,
}),
repositionSectionSuccess = data => ({
  type: REPOSITION_SECTION, data,
}),
addAreaSuccess = data => ({
  type: ADD_AREA, data,
});

export function get(data) {
  return dispatch => api.getChat(data).then((response) => {
    dispatch(success(response.data));
  }).catch((error) => {
    throw (error);
  });
}

export function addSection(section) {
  return dispatch => api.addSection(section).then((response) => {
    dispatch(addSectionSuccess(section));
  }).catch((error) => {
    throw (error);
  });
}

export function repositionSection(currPos,newPos) {
  return dispatch => api.repositionSection(currPos,newPos).then((response) => {
    dispatch(repositionSectionSuccess({currPos,newPos}));
  }).catch((error) => {
    throw (error);
  });
}

export function addArea(area) {
  return dispatch => api.addArea(area).then((response) => {
    dispatch(addAreaSuccess(area));
  }).catch((error) => {
    throw (error);
  });
}
