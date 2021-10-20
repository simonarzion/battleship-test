import actionTypes from '../constants/actionTypes';

const setStatus = (status) => ({
  type: actionTypes.GAME_STATUS,
  payload: status,
});

export default setStatus;
