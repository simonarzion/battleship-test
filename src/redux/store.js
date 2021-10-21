import { combineReducers } from 'redux';
import shipReducer from './reducers/ship';
import shipsAvaiblesReducer from './reducers/shipsAvaibles';
import statusReducer from './reducers/status';
import turnReducer from './reducers/turn';
import userReducer from './reducers/user';

const allReducers = combineReducers({
  status: statusReducer,
  user: userReducer,
  ship: shipReducer,
  shipsAvaibles: shipsAvaiblesReducer,
  turn: turnReducer,
});

export default allReducers;
