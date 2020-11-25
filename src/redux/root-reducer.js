import { combineReducers } from 'redux';
import userReducer from './user/user.reducer.js';

// controla todos os outros reducers
export default combineReducers({
    user: userReducer
})