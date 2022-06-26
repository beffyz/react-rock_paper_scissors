import React from 'react';
import styles from './GamePage.module.scss';

const GamePage = () => (
  <div className={`container ${styles.game}`}>
    <div className="row">
      <div className="col-md-12">
        <div className={styles.game_scoreboard}>
          <p>Your score</p>
          <p>Tie</p>
          <p>CPU score</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className={styles.game_picks}>
          <div className={styles.game_pick} />
          <div className={styles.game_pick} />
          <div className={styles.game_pick} />
          <div className={styles.game_pick} />
          <div className={styles.game_pick} />
        </div>
      </div>
    </div>
  </div>
);

export default GamePage;
