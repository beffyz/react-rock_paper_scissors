import React from 'react';
import styles from './Scoreboard.module.scss';

const Scoreboard = () => (
  <div className={styles.scoreboard}>
    <p>Your score</p>
    <p>Tie</p>
    <p>CPU score</p>
  </div>
);

export default Scoreboard;
