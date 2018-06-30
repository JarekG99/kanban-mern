import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from "../../components/Edit";
import styles from './Notes.css';

const Notes = ({ notes, laneId, noteId, editNote, onUpdate, onDelete }) => {
  return (<ul className={styles.notes}>{notes.map((note) =>
    <Note
      // noteId={note.id}
      key={note.id}
      laneId={laneId}
      >
      <Edit
       editing={note.editing}
       value={note.task}
       onValueClick={() => editNote(note.id)}
       onUpdate={(task) => onUpdate({...note, task, editing: false, })}
       onDelete={() => onDelete( note.id, laneId )}
      />
     </Note>
  )}</ul>);
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
