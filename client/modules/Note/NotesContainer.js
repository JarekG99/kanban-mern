import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions';
import { editNoteRequest, deleteNoteRequest, updateNoteRequest, deleteNote } from './NoteActions';

const mapDispatchToProps = {
 ...noteActions,
  editNote: editNoteRequest,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  deleteNote: deleteNote,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
