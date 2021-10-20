import { combineReducers } from 'redux';
import statusReducer from './reducers/status';
import userReducer from './reducers/user';

const allReducers = combineReducers({
  status: statusReducer,
  user: userReducer,
});

export default allReducers;
