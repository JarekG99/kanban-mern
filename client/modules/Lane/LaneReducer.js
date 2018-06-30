// Import Actions
import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, EDIT_LANE, DELETE_LANE } from './LaneActions';
import { CREATE_NOTE, DELETE_NOTE } from '../Note/NoteActions';

import omit from 'lodash/omit';

// Initial State
const initialState = {};

const lanes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LANE:
      return {...state, [action.lane.id]: action.lane };

    case UPDATE_LANE:
      // console.log('update_lane action:', action);
      return { ...state, [action.lane.id]: action.lane };

    case DELETE_LANE: {
      return omit(state, action.laneId);
   }

   case CREATE_LANES:
     return { ...action.lanes };

   case EDIT_LANE: {
      // console.log('edit_lane action:', action);
      const lane = { ...state[action.laneId], editing: true }
      return { ...state, [action.laneId]: lane };
   }

   case CREATE_NOTE: {
    const newLane = { ...state[action.laneId] };
    newLane.notes = newLane.notes.concat(action.note.id);

    return { ...state, [action.laneId]: newLane };
  }

  case DELETE_NOTE: {
    // console.log('delete LANE/Note action:', action);
    const newLane = { ...state[action.laneId] };
        newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);

    return { ...state, [action.laneId]: newLane };
  }

    default:
      return state;
  }
};

export default lanes;
