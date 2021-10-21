/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { decreaseShipAmount, selectShip } from '../redux/actions/ship';

const PlayerBoard = ({ isHorizontal, COLUMNS, ROWS }) => {
  const states = useSelector((state) => state);
  const [layout, setLayout] = useState(new Array(ROWS * COLUMNS).fill('empty'));
  let x;
  let y;

  const dispatch = useDispatch();

  const handleClick = (index) => {
    x = index % ROWS;
    y = Math.floor(index / COLUMNS);

    const i = y * 10 + x;

    const newLayout = [...layout];

    for (let j = 0; j < states.ship?.spaces; j += 1) {
      if (states.ship.amount < 1) return;

      if (isHorizontal) {
        newLayout[i + j] = 'ship';
        setLayout(newLayout);
      } else {
        newLayout[i + COLUMNS * j] = 'ship';
        setLayout(newLayout);
      }
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

PlayerBoard.propTypes = {
  isHorizontal: PropTypes.bool.isRequired,
  COLUMNS: PropTypes.number.isRequired,
  ROWS: PropTypes.number.isRequired,
};

export default PlayerBoard;
