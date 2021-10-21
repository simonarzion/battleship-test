/* eslint-disable no-param-reassign */
import actionTypes from '../constants/actionTypes';

const initialState = {
  name: null,
  amount: null,
  spaces: null,
  isHorizontal: true,
};

const shipReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_SHIP:
      return action.payload;
    case actionTypes.DECREASE_SHIP_AMOUNT:
      // eslint-disable-next-line no-return-assign
      return { ...state, amount: (state.amount -= 1) };
    default:
      return state;
  }
};

export default shipReducer;
