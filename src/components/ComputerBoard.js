/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const ComputerBoard = ({ COLUMNS, ROWS }) => {
  // eslint-disable-next-line no-unused-vars
  const [layout, setLayout] = useState(new Array(ROWS * COLUMNS).fill('empty'));

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
