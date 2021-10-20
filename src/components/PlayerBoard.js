import React from 'react';
import { useSelector } from 'react-redux';

const ROWS = 10;
const COLUMNS = 10;
const BOARD = ROWS * COLUMNS;

const PlayerBoard = () => {
  const states = useSelector((state) => state);
  let x;
  let y;

  const getCoordinates = (index) => {
    x = index % 10;
    y = Math.floor(index / 10);
  };

  const layout = new Array(BOARD).fill('empty');

  const getIndex = (index) => {
    getCoordinates(index);
    const i = y * 10 + x;
    console.log(layout.at(2));
    console.log(layout[i]);
    console.log(layout);
  };

  const handleMouseMove = (index) => {
    getIndex(index);
  };

  return (
    <div>
      {states.status !== 'welcome' && <h3>{states.user}</h3>}

      <div className='board'>
        {layout.map((square, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`square ${square}`}
            onMouseEnter={() => handleMouseMove(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
