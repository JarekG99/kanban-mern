import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as laneActions from '../Lane/LaneActions';
// import { bindActionCreators } from 'redux';
import Lanes from '../Lane/Lanes';
import { createLaneRequest, deleteLaneRequest, deleteNoteRequest, fetchLanes } from '../Lane/LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

// Import Style
import styles from '../Lane/Lane.css';

const Kanban = (props) => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
        })}
      >Add Lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
  deleteLane: deleteLaneRequest,
  deleteNote: deleteNoteRequest,

};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
