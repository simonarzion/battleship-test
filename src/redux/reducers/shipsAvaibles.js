import actionTypes from '../constants/actionTypes';

const shipsAvaiblesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPS_AVAIBLES:
      return action.payload;
    default:
      return state;
  }
};

export default shipsAvaiblesReducer;
