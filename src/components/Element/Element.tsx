import React from 'react';
import styles from './Element.module.scss';
import { Pick } from '../../models/PickModel';

type ElementProps = {
    element: Pick,
    getWinner: (userPick: Pick, cpuPick: Pick) => string,
    getCpuPick: () => Pick;
}

const Element = ({
  element, getWinner, getCpuPick,
}: ElementProps) => (
  <div
    onClick={() => { getWinner(element, getCpuPick()); }}
    className="center-md"
  >
    <div className={styles.element}>
      <img src={element.elementImage} alt={element.element} />
    </div>
    <h1>{element.element}</h1>
  </div>
);

export default Element;
