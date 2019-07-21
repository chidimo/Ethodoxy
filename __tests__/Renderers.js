import React from 'react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/reducers/rootReducer';

import { render } from '@testing-library/react';

// for apps that has react-router functions such as <Link>
export const RenderWithRouter = (
    ui,
    { route = '/', history=createMemoryHistory({ initialEntries: [ route ] }) } = {}
) => {
    return {
        ...render(
            <Router history={history}>
                { ui }
            </Router>),
        history };
};

// for apps that are connected to the store
export const RenderWithRedux = (ui, { store=createStore(rootReducer) } = {}
) => {
    return {
        ...render(
            <Provider store={store}>
                { ui }
            </Provider>),
        store };
};

export const RenderWithReduxAndRouter = (
    ui,
    { store=createStore(rootReducer) } = {},
    { route = '/', history=createMemoryHistory({ initialEntries: [ route ] }) } = {}
) => {
    return {
        ...render(
            <Provider store={store}>
                <Router history={history}>
                    { ui }
                </Router>
            </Provider>
        ),
        history,
        store,
    };
};
