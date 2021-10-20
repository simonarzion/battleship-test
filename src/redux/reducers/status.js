import actionTypes from '../constants/actionTypes';

const statusReducer = (state = 'welcome', action) => {
  switch (action.type) {
    case actionTypes.GAME_STATUS:
      return action.payload;

    default:
      return state;
  }
};

export default statusReducer;
