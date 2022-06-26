import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Scoreboard.module.scss';

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
        <span
          className={(userScore > cpuScore) ? `${styles.winner_score}` : `${styles.score}`}
        >
          {userScore}
        </span>
      </h2>
      <h2>
        Tie
        <br />
        <span>
          {tieScore}
        </span>
      </h2>
      <h2>
        CPU score
        <br />
        <span
          className={(userScore < cpuScore) ? `${styles.winner_score}` : `${styles.score}`}
        >
          {cpuScore}
        </span>
      </h2>
    </div>
  );
};

export default Scoreboard;
