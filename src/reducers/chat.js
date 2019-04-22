import { GET_CMS, ADD_SECTION, REPOSITION_SECTION, ADD_AREA } from '../constants/actionTypes';
import initialState from './initialState';

const sortedSections = arr => arr.sort((a,b) => a.position - b.position);

export default function chatReducer(state = initialState.chat, action) {
  let newState
  switch (action.type) {
    case GET_CMS:
      newState = { ...state,
        areas: action.data.areas,
        sections: sortedSections(action.data.sections) };
      return newState;

    case ADD_SECTION:
      newState = { ...state };
      let updatedSections = [...newState.sections, action.data]
      return { ...newState, sections: sortedSections(updatedSections)};

    case REPOSITION_SECTION:
      newState = { ...state };
      const { sections } = newState,
        el = sections[action.data.currPos];
      if (sections[action.data.newPos]) {
        sections[action.data.currPos] = {...sections[action.data.newPos], position: action.data.currPos};
        sections[action.data.newPos] = {...el, position: action.data.newPos};
      }
      return { ...newState };

    case ADD_AREA:
      newState = { ...state };
      let updatedAreas = [...newState.areas, action.data]
      return { ...newState, areas: updatedAreas};

    default:
      return state;
  }
}
