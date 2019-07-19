import { combineReducers } from 'redux';
import { auth } from './authUser';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;
