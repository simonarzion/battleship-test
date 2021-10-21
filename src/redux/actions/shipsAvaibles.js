import actionTypes from '../constants/actionTypes';

const setShipsAvaibles = (ships) => ({
  type: actionTypes.SET_SHIPS_AVAIBLES,
  payload: ships,
});

export default setShipsAvaibles;
