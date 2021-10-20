import actionTypes from '../constants/actionTypes';

const userReducer = (state = 'unknown', action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
