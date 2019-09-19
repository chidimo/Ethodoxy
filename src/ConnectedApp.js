import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import persistedstore from './store';
import AppRoutes from './components/AppRoutes';

import constants from './constants';

const { store, persistor } = persistedstore();

const ConnectedApp = () => {
    (async () => {
        constants.axiosDefaults();
    })();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRoutes />
            </PersistGate>
        </Provider>
    );
};

export default ConnectedApp;
