/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

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
  // eslint-disable-next-line no-unused-vars
  const [layout, setLayout] = useState(new Array(ROWS * COLUMNS).fill('empty'));

  useEffect(() => {
    const generateComputerLayout = () => {
      const totalShips = computerShipsAvaibles;
      // const totalAmount = computerShipsAvaibles.reduce(
      //   (prevValue, currValue) => prevValue + currValue.amount,
      //   0,
      // );

      const newLayout = [...layout];

      // Iterate over all types of ships
      for (let j = 0; j < totalShips.length; j += 1) {
        // Iterate over the amount of the specific ship
        for (let k = 0; k < totalShips[j].amount; k += 1) {
          const i = Math.floor(Math.random() * (COLUMNS * ROWS));
          const x = i % ROWS;
          const y = Math.floor(i / COLUMNS);
          const isHorizontal = Math.floor(Math.random() * 2) === 1;

          // Iterate over the spaces of the specific ship
          for (let n = 0; n < totalShips[j].spaces; n += 1) {
            // Check if the ship fits in the board

            if (isHorizontal && x + totalShips[k].spaces <= COLUMNS) {
              console.log('horizontal');
              newLayout[i + n] = 'ship';
            } else if (!isHorizontal && y + totalShips[k].spaces <= ROWS) {
              console.log('vertical');
              newLayout[i + COLUMNS * n] = 'ship';
            }

            // if (isHorizontal && x + totalShips[k].spaces <= COLUMNS) {
            //   if (newLayout[i + k] === 'ship') return;
            //   newLayout[i + k] = 'ship';
            //   console.log('a');
            // } else if (!isHorizontal && y + totalShips[k].spaces <= ROWS) {
            //   if (newLayout[i + COLUMNS * k] === 'ship') return;
            //   newLayout[i + COLUMNS * k] = 'ship';
            //   console.log('aa');
            // } else {
            //   console.log('aaa');
            //   return;
            // }
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
