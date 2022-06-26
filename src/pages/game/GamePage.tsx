import React from 'react';
import styles from './GamePage.module.scss';
import PickData from '../../data/PickData';
import Element from '../../components/Element/Element';
import Scoreboard from '../../components/Scoreboard/Scoreboard';

const GamePage = () => {
  const data = PickData;

  return (
    <div className={`container ${styles.game}`}>
      <div className="row">
        <div className="col-md-12">
          <Scoreboard />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className={styles.game_picks}>
            {data.map(({ element, elementId, elementImage }) => (
              <Element key={elementId} element={element} elementId={elementId} elementImage={elementImage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
