import actionTypes from '../constants/actionTypes';

export const selectShip = (ship) => ({
  type: actionTypes.SELECT_SHIP,
  payload: ship,
});

export const decreaseShipAmount = () => ({
  type: actionTypes.DECREASE_SHIP_AMOUNT,
});
