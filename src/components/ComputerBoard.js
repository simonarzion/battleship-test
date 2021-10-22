/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const ComputerBoard = ({ COLUMNS, ROWS }) => {
  // eslint-disable-next-line no-unused-vars
  const [layout, setLayout] = useState(new Array(ROWS * COLUMNS).fill('empty'));
  const states = useSelector((state) => state);

  useEffect(() => {
    const generateComputerLayout = () => {
      const totalShips = states.shipsAvaibles.filter((ship) => ship.amount > 0);
      const totalAmount = states.shipsAvaibles.reduce(
        (prevValue, currValue) => prevValue + currValue.amount,
        0,
      );

      const newLayout = [...layout];
      console.log(totalShips, totalAmount, newLayout);

      // for (let j = 0; j < totalAmount; j += 1) {
      //   console.log(j);
      // }

      // Iterate over all types of ships
      for (let j = 0; j < totalShips.length; j += 1) {
        console.log(totalShips[j]);
        // Iterate over the amount of the specific ship
        for (let k = 0; k < totalShips[j].amount; k += 1) {
          console.log(totalShips[j].amount);
        }
      }

      // const i = Math.floor(Math.random() * (COLUMNS * ROWS));
      // const isHorizontal = Math.floor(Math.random() * 2) === 1;

      // const x = i % ROWS;
      // const y = Math.floor(i / COLUMNS);

      // for (let j = 0; j < states.ship?.spaces; j += 1) {
      //   if (states.ship.amount < 1) return;

      //   // Check if the ship fits in the board
      //   if (isHorizontal && x + states.ship.spaces <= COLUMNS) {
      //     if (newLayout[i + j] === 'ship') return;
      //     newLayout[i + j] = 'ship';
      //   } else if (!isHorizontal && y + states.ship.spaces <= ROWS) {
      //     if (newLayout[i + COLUMNS * j] === 'ship') return;
      //     newLayout[i + COLUMNS * j] = 'ship';
      //   } else {
      //     return;
      //   }
      // }
    };

    generateComputerLayout();
  }, []);

  Math.floor(Math.random() * (COLUMNS * ROWS));

  return (
    <div>
      <h3>Computer</h3>
      <div className='board'>
        {layout.map((square, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`square ${square}`}
          />
        ))}
      </div>
    </div>
  );
};

ComputerBoard.propTypes = {
  COLUMNS: PropTypes.number.isRequired,
  ROWS: PropTypes.number.isRequired,
};
export default ComputerBoard;
