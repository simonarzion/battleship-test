/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import generateRandomIndex from '../helpers/generateRandomIndex';
import generateRandomDirection from '../helpers/generateRandomDirection';

const computerShipsAvaibles = [
  {
    name: 'carrier',
    amount: 1,
    spaces: 4,
  },
  {
    name: 'cruisers',
    amount: 3,
    spaces: 3,
  },
  {
    name: 'submarine',
    amount: 1,
    spaces: 2,
  },
];

const ComputerBoard = ({ COLUMNS, ROWS }) => {
  const [layout, setLayout] = useState(new Array(ROWS * COLUMNS).fill('empty'));

  useEffect(() => {
    let newLayout;
    setLayout((prevLayout) => {
      newLayout = [...prevLayout];
      return newLayout;
    });

    const checkIfShipFits = (isHorizontal, spaces, i) => {
      // temp var for returning boolean
      let temp = 0;

      // Get coordinates
      const x = i % ROWS;
      const y = Math.floor(i / COLUMNS);

      for (let n = 0; n < spaces; n += 1) {
        if (isHorizontal) {
          if (x + spaces < COLUMNS && newLayout[i + n] !== 'ship') {
            temp += 1;
          }
        }
        if (!isHorizontal) {
          if (y + spaces < ROWS && newLayout[i + COLUMNS * n] !== 'ship') {
            temp += 1;
          }
        }
      }

      return temp === spaces;
    };

    const generateComputerLayout = () => {
      const totalShips = computerShipsAvaibles;
      const boardSize = ROWS * COLUMNS;

      // Iterate over all types of ships
      for (let j = 0; j < totalShips.length; j += 1) {
        // Iterate over the amount of the specific ship
        for (let k = 0; k < totalShips[j].amount; k += 1) {
          let i = generateRandomIndex(boardSize);
          const isHorizontal = generateRandomDirection();

          // Check if the ships fits in the board
          // If not, generates a new place
          while (!checkIfShipFits(isHorizontal, totalShips[j].spaces, i)) {
            i = generateRandomIndex(boardSize);
          }

          for (let l = 0; l < totalShips[j].spaces; l += 1) {
            if (isHorizontal) newLayout[i + l] = 'ship';
            if (!isHorizontal) newLayout[i + COLUMNS * l] = 'ship';
          }
        }
      }

      setLayout(newLayout);
    };

    generateComputerLayout();
  }, [COLUMNS, ROWS]);

  return (
    <div className='board__container'>
      <h3>Computer</h3>
      <div className='board'>
        {layout.map((square, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`square ${square} computer`}
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
