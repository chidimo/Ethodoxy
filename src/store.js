import {} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [ 'loadingBar', 'drbReducer' ]
};

const logger = createLogger({
    diff: true,
    duration: true,
    collapsed: true,
    logErrors: true
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const persistedstore = () => {
    let store = createStore(persistedReducer, applyMiddleware(logger, thunk));
    let persistor = persistStore(store);
    return { store, persistor };
};

export default persistedstore;
