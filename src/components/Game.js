import React from 'react';
import Header from './Header';
import PlayerBoard from './PlayerBoard';
import ShipsFleet from './ShipsFleet';

const ROWS = 10;
const COLUMNS = 10;
const BOARD = ROWS * COLUMNS;

const BOARD_STATE = {
  empty: 'empty',
  hit: 'hit',
};

const Game = () => {
  console.log(typeof BOARD_STATE);

  return (
    <div>
      <Header />

      <ShipsFleet />

      <PlayerBoard BOARD={BOARD} BOARD_STATE={BOARD_STATE} />
    </div>
  );
};

export default Game;
