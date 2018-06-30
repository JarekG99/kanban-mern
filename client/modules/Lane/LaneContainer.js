import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { deleteLaneRequest, updateLaneRequest, editLaneRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {

    // var laneNotes = ownProps.lane.notes.map(function(noteId) { return state.notes[noteId] || false});
    // laneNotes = laneNotes.filter(note => note);
    //
    return {
     laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
  };
};

const mapDispatchToProps = {
    ...laneActions,
    editLane: editLaneRequest,
    deleteLane: deleteLaneRequest,
    updateLane: updateLaneRequest,
    addNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
