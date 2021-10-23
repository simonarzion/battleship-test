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
  const newLayout = [...layout];

  useEffect(() => {
    const checkIfShipFits = (isHorizontal, x, y, spaces, i) => {
      for (let n = 0; n < spaces; n += 1) {
        console.log(newLayout[i + n]);
        if (isHorizontal) {
          if (x + spaces < COLUMNS && newLayout[i + n] === 'ship') {
            console.log('a');
            newLayout[i + n] = 'ship';
            return true;
          }
        }
        if (!isHorizontal) {
          if (y + spaces < ROWS && newLayout[i + COLUMNS * n] === 'ship') {
            console.log('b');
            newLayout[i + COLUMNS * n] = 'ship';
            return true;
          }
        }
      }
      console.log('c');

      return false;
    };

    const generateComputerLayout = () => {
      const totalShips = computerShipsAvaibles;
      const boardSize = ROWS * COLUMNS;

      // Iterate over all types of ships
      for (let j = 0; j < totalShips.length; j += 1) {
        // Iterate over the amount of the specific ship
        for (let k = 0; k < totalShips[j].amount; k += 1) {
          let i = generateRandomIndex(boardSize);
          const x = i % ROWS;
          const y = Math.floor(i / COLUMNS);
          const isHorizontal = generateRandomDirection();

          while (!checkIfShipFits(isHorizontal, x, y, totalShips[j].spaces, i)) {
            i = generateRandomIndex(100);
            break;
          }

          // if (isHorizontal) {
          //   while (!(x + totalShips[j].spaces < COLUMNS) || newLayout[i + n] === 'ship') {
          //     i = generateRandomIndex(boardSize);
          //     console.log(i);
          //     console.log('a');
          //   }
          //   newLayout[i + n] = 'ship';
          // }
          // if (!isHorizontal) {
          //   while (!(y + totalShips[j].spaces < ROWS) || newLayout[i + COLUMNS * n] === 'ship') {
          //     i = generateRandomIndex(boardSize);
          //     console.log(i);
          //     console.log('b');
          //   }
          //   newLayout[i + COLUMNS * n] = 'ship';
          // }

          // Iterate over the spaces of the specific ship

          // while (true) {
          //   let aux;
          //   for (let n = 0; n < totalShips[j].spaces; n += 1) {
          //     if (!(x + totalShips[j].spaces < COLUMNS) || newLayout[i + n] === 'ship') {
          //       aux += 1;
          //     }
          //   }
          //   if (aux === totalShips[j].spaces) {
          //     break;
          //   }
          // }
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
// if (isHorizontal && x + totalShips[j].spaces <= COLUMNS) {
//   if (newLayout[i + n] === 'ship') return;
//   newLayout[i + n] = 'ship';
// }
// if (!isHorizontal && y + totalShips[j].spaces <= ROWS) {
//   if (newLayout[i + n] === 'ship') return;
//   newLayout[i + COLUMNS * n] = 'ship';
// }
//
