import React from 'react';
import styles from './Element.module.scss';

type ElementProps = {
    element: string,
    elementId: number,
    elementImage: string,
}

const Element = ({ element, elementId, elementImage }: ElementProps) => (
  <div className="center-md">
    <div className={styles.element}>
      <img src={elementImage} alt={element} />
    </div>
    <h1>{element}</h1>
  </div>
);

export default Element;
