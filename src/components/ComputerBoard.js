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
    const generateComputerLayout = () => {
      const newLayout = [...layout];
      const totalShips = computerShipsAvaibles;
      const boardSize = ROWS * COLUMNS;

      // Iterate over all types of ships
      for (let j = 0; j < totalShips.length; j += 1) {
        // Iterate over the amount of the specific ship
        console.log('first loop');
        for (let k = 0; k < totalShips[j].amount; k += 1) {
          console.log('second loop');

          const i = generateRandomIndex(boardSize);
          const x = i % ROWS;
          const y = Math.floor(i / COLUMNS);
          const isHorizontal = generateRandomDirection();
          // Iterate over the spaces of the specific ship
          for (let n = 0; n < totalShips[j].spaces; n += 1) {
            console.log('third loop');

            if (isHorizontal) {
              newLayout[i + n] = 'ship';
            }
            if (!isHorizontal) {
              newLayout[i + COLUMNS * n] = 'ship';
            }
          }
        }
      }

      setLayout(newLayout);
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
