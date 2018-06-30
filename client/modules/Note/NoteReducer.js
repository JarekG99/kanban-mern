// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, EDIT_NOTE, DELETE_NOTE, CREATE_NOTES } from './NoteActions';
import omit from 'lodash/omit';
// Initial State
const initialState = {};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      // console.log('create_note action:', action);
      return {...state, [action.note.id]: action.note };
    case UPDATE_NOTE:
      // console.log('update_note action:', action);
      return {...state, [action.note.id]: action.note };

    case EDIT_NOTE: {
      // console.log('edit_note action:', action);
      const note = { ...state[action.noteId], editing: true };
      return { ...state, [action.noteId]: note };
    }

    case DELETE_NOTE:
      // console.log('delete_note action:', action);
      return omit(state, action.noteId);

    case CREATE_NOTES:
      return { ...action.notes };

    default:
      return state;
  }
}

export default notes;
