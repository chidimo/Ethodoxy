import { combineReducers } from 'redux';
import auth from './authUser';
import drbReducer from './drbReducer';

const rootReducer = combineReducers({
    auth, drbReducer,
});

export default rootReducer;
