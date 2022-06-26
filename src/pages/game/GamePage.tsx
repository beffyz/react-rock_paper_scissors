import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increaseCpuScore, increaseTieScore, increaseUserScore } from '../../store/reducers/ScoreboardReducer';
import PickData from '../../data/PickData';
import { Pick } from '../../models/PickModel';
import { initialUserState, initialCpuState } from '../../data/initialStateData';
import Element from '../../components/Element/Element';
import Scoreboard from '../../components/Scoreboard/Scoreboard';
import ElementDuelBox from '../../components/ElementDuelBox/ElementDuelBox';
import styles from './GamePage.module.scss';

const GamePage = () => {
  const data = PickData;
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const [userPickStorage, setUserPickStorage] = useState<Pick>(initialUserState);
  const [cpuPickStorage, setCpuPickStorage] = useState<Pick>(initialCpuState);

  const getCpuPick = () => data[Math.floor(Math.random() * data.length)];

  const getWinner = (userPick: Pick, cpuPick: Pick) => {
    setCpuPickStorage(cpuPick);
    setUserPickStorage(userPick);
    if (userPick.element === cpuPick.element) {
      dispatch(increaseTieScore());
      setMessage('Boom! That`s a tie! Try again :)');
    } else if (userPick.strongerThan.includes(cpuPick.element)) {
      dispatch(increaseUserScore());
      setMessage('Boom! That`s a victory!!');
    } else {
      dispatch(increaseCpuScore());
      setMessage('Uhh! Cpu won! Try again :)');
    }
  };

  return (
    <div className={`container ${styles.game}`}>
      <div className="row">
        <div className="col-md-12">
          <Scoreboard />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">

          <div className="row">
            <div className="col-md-12">
              <ElementDuelBox cpuPick={cpuPickStorage} userPick={userPickStorage} />
            </div>
          </div>
          <h1 className={`center-md ${styles.game_message}`}>
            {message}
          </h1>
          <div className={styles.game_picks}>
            {data.map((element) => (
              <Element
                getCpuPick={getCpuPick}
                getWinner={getWinner}
                key={element.elementId}
                element={element}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
