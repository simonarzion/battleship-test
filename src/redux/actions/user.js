import actionTypes from '../constants/actionTypes';

const setUsername = (name) => ({
  type: actionTypes.SET_USERNAME,
  payload: name,
});

export default setUsername;
