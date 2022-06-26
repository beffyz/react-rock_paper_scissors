import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Scoreboard.module.scss';
import { RootState } from '../../store/store';

const Scoreboard = () => {
  const userScore = useSelector((state: RootState) => state.pick.userScore);
  const tieScore = useSelector((state: RootState) => state.pick.tieScore);
  const cpuScore = useSelector((state: RootState) => state.pick.cpuScore);

  return (
    <div className={`center-md ${styles.scoreboard}`}>
      <h2>
        Your score
        {' '}
        <br />
        {userScore}
      </h2>
      <h2>
        Tie
        <br />
        {tieScore}
      </h2>
      <h2>
        CPU score
        <br />
        {cpuScore}
      </h2>
    </div>
  );
};

export default Scoreboard;
