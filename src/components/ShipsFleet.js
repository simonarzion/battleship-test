/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { selectShip } from '../redux/actions/ship';

const ShipsFleet = ({ setIsHorizontal, isHorizontal }) => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state);
  const handleClick = (ship) => {
    dispatch(selectShip(ship));
  };

  const handleOrientation = () => {
    setIsHorizontal(!isHorizontal);
    console.log(isHorizontal);
  };

  return (
    <div className='ships'>
      <button type='button' onClick={handleOrientation}>
        {isHorizontal ? 'switch to vertical' : 'switch to horizontal'}
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
              } ${!isHorizontal ? 'vertical' : ''}`}
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

ShipsFleet.propTypes = {
  setIsHorizontal: PropTypes.func.isRequired,
  isHorizontal: PropTypes.bool.isRequired,
};

export default ShipsFleet;
