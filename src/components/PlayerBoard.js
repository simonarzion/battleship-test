/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseShipAmount, selectShip } from '../redux/actions/ship';

const ROWS = 10;
const COLUMNS = 10;
const BOARD = ROWS * COLUMNS;

const PlayerBoard = () => {
  const states = useSelector((state) => state);
  const [layout, setLayout] = useState(new Array(BOARD).fill('empty'));
  let x;
  let y;

  const dispatch = useDispatch();

  const handleClick = (index) => {
    x = index % 10;
    y = Math.floor(index / 10);

    const i = y * 10 + x;

    const newLayout = [...layout];

    for (let j = 0; j < states.ship?.spaces; j += 1) {
      if (states.ship.amount < 1) return;
      newLayout[i + j] = 'ship';
      setLayout(newLayout);
    }

    dispatch(decreaseShipAmount());
    dispatch(selectShip({}));
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
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
