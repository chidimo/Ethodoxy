import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/rootReducer';

const persistConfig = { key: 'root', storage };
const logger = createLogger();
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk, logger))

export default store;