import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit';
// Import Style
import styles from './Lane.css';

const Lane = (props) => {
  const { lane, laneNotes, updateLane, addNote, editLane, deleteLane } = props;
  const laneId = lane.id;

  return (
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <Edit
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(laneId)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
      </div>
        <div className={styles.LaneAddNote}>
          <button className={styles.btn}onClick={() => addNote({ task: 'New Note' }, laneId)}>Add Note</button>
        </div>
      <div>
        <NotesContainer
          notes={laneNotes}
          laneId={laneId}
        />
      </div>
      <div className={styles.LaneDelete}>
        <button className={styles.btn}onClick={() => deleteLane(laneId)}>Remove Lane</button>
      </div>
  </div>

  );
};

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
};

export default Lane;
