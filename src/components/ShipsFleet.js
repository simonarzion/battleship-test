/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectShip } from '../redux/actions/ship';

const ShipsFleet = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state);
  const handleClick = (ship) => {
    dispatch(selectShip(ship));
  };

  const handleOrientation = () => {
    console.log(states.ship, states);
  };

  return (
    <div className='ships'>
      <button type='button' onClick={handleOrientation}>
        {!states.ship.direction ? 'horizontal' : 'vertical'}
      </button>
      {states.shipsAvaibles.map((ship) => {
        const { name, amount } = ship;
        const squares = new Array(ship.spaces).fill('space');

        return (
          <div key={name} className='ship__container'>
            <h3 className='ship__name'>
              {name} x{amount}
            </h3>
            <div
              className={`ship ${
                states.ship.name === name && states.ship.amount > 0
                  ? 'is-selecting'
                  : ''
              } `}
              onClick={() => handleClick(ship)}
              onKeyPress={() => handleClick(ship)}
            >
              {squares.map((s, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className='ship__square' />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipsFleet;
