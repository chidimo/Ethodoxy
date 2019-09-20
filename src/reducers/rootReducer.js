import { loadingBarReducer } from 'react-redux-loading-bar';

import auth from './authUser';
import drbReducer from './drbReducer';
import commReducer from './commReducer';

export default (state = {}, action) => {
    return {
        auth: auth(state.auth, action, state),
        drbReducer: drbReducer(state.drbReducer, action, state),
        commReducer: commReducer(state.commReducer, action, state),

        loadingBar: loadingBarReducer(state.loadingBar, action, state)
    };
};
