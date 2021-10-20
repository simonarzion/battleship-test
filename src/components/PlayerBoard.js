/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

const PlayerBoard = ({ BOARD, BOARD_STATE }) => {
  const username = useSelector((state) => state.user);
  const [coordinates, setCoordinates] = useState({ x: null, y: null });

  const board = new Array(BOARD).fill(BOARD_STATE.empty);

  const indexToCoordinates = (i) => {
    setCoordinates({ x: i % 10, y: Math.floor(i / 10) });
  };

  const coordinatesToIndex = () => {
    console.log('index: ', coordinates.y * 10 + coordinates.x, board);
  };

  coordinatesToIndex();

  return (
    <div>
      <h3>{username}</h3>

      <div className='board'>
        {board.map((b, i) => (
          <div
            key={i}
            className={`board__square ${b}`}
            role='button'
            onClick={() => indexToCoordinates(i)}
          />
        ))}
      </div>
    </div>
  );
};

PlayerBoard.propTypes = {
  BOARD: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  BOARD_STATE: PropTypes.object.isRequired,
};

export default PlayerBoard;
