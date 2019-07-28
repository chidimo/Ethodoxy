import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import auth from './authUser';
import drbReducer from './drbReducer';

const rootReducer = combineReducers({
    auth,
    drbReducer,
    loadingBar: loadingBarReducer,
});

export default rootReducer;
