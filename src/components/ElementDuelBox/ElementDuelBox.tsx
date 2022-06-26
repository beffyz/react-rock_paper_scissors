import React from 'react';
import { Pick } from '../../models/PickModel';
import styles from './ElementDuelBox.module.scss';

type ElementDuelBoxProps = {
    userPick: Pick,
    cpuPick: Pick,
}

const ElementDuelBox = ({ userPick, cpuPick }: ElementDuelBoxProps) => (
  <div className="row">
    <div className="col-md-6">
      <img className={styles.duel_img} width={200} src={userPick.elementImage} alt="?" />
    </div>
    <div className="col-md-6">
      <img className={styles.duel_img} width={200} src={cpuPick.elementImage} alt="?" />
    </div>
  </div>
);

export default ElementDuelBox;
