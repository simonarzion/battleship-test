/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const shipsAvaibles = [
  {
    name: 'carrier',
    amount: 1,
    spaces: 4,
    placed: false,
    direction: 'horizontal',
  },
  {
    name: 'cruisers',
    amount: 3,
    spaces: 3,
    placed: false,
    direction: 'horizontal',
  },
  {
    name: 'submarine',
    amount: 1,
    spaces: 2,
    placed: false,
    direction: 'horizontal',
  },
];

const ShipsFleet = () => {
  const selectShip = (ship) => {
    console.log(ship);
  };

  return (
    <div>
      {shipsAvaibles.map((ship) => {
        const { name, amount } = ship;
        const squares = new Array(ship.spaces).fill('space');

        return (
          <div key={name} className='ship__container'>
            <h3 className='ship__name'>
              {name} x{amount}
            </h3>
            <div
              className='ship'
              onClick={() => selectShip(ship)}
              onKeyPress={() => selectShip(ship)}
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
