import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';
import styles from './Lanes.css';

import * as laneActions from '../Lane/LaneActions';

const Lanes = ({ lanes }) => {
  return (
    <div className={styles.lanes}>{lanes.map(lane =>
      <Lane className={styles.lane} key={lane.id} lane={lane} />
    )}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
