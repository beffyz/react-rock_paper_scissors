import React from 'react';
import styles from './App.module.scss';
import GamePage from './pages/game/GamePage';

const App = () => (
  <section className={styles.App}>
    <GamePage />
  </section>
);

export default App;
