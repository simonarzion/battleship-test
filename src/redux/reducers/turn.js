import actionTypes from '../constants/actionTypes';

const turnReducer = (state = true, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TURN:
      return !state;
    default:
      return state;
  }
};

export default turnReducer;
