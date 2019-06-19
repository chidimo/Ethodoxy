import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './store';

import Home from './components/Home';

const persistor = persistStore(store)

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Home />
            </PersistGate>
        </Provider>
    );
}

export default App;
