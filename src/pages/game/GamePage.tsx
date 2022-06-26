import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './GamePage.module.scss';
import PickData from '../../data/PickData';
import Element from '../../components/Element/Element';
import Scoreboard from '../../components/Scoreboard/Scoreboard';
import { Pick } from '../../models/PickModel';
import { increaseCpuScore, increaseTieScore, increaseUserScore } from '../../store/reducers/ScoreboardReducer';
import ElementDuelBox from '../../components/ElementDuelBox/ElementDuelBox';

const GamePage = () => {
  const data = PickData;
  const dispatch = useDispatch();

  const initialUserState = {
    element: 'Paper',
    elementImage: 'https://i.gifer.com/origin/14/14b9f4265321c8ed068339bb9708ebc5_w200.gif',
    elementId: 0,
    strongerThan: [],
  };

  const initialCpuState = {
    element: 'Paper',
    elementImage: 'https://i.pinimg.com/originals/7c/2e/66/7c2e66b343674f2ea0f9b38f2db0a793.gif',
    elementId: 0,
    strongerThan: [],
  };

  const [message, setMessage] = useState('');
  const [userPickStorage, setUserPickStorage] = useState<Pick>(initialUserState);
  const [cpuPickStorage, setCpuPickStorage] = useState<Pick>(initialCpuState);

  const getWinner = (userPick: Pick, cpuPick: Pick) => {
    setCpuPickStorage(cpuPick);
    setUserPickStorage(userPick);
    if (userPick.element === cpuPick.element) {
      dispatch(increaseTieScore());
      setMessage('Boom! That`s a tie! Try again :)');
      return 'Tie!';
    }
    if (userPick.strongerThan.includes(cpuPick.element)) {
      dispatch(increaseUserScore());
      setMessage('Boom! That`s a victory!!');
      return 'You win!';
    }
    dispatch(increaseCpuScore());
    setMessage('Uhh! Cpu won! Try again :)');
    return 'You lose!';
  };

  const getCpuPick = () => data[Math.floor(Math.random() * data.length)];

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
