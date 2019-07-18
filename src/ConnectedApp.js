import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./components/AppRoutes";

const ConnectedApp = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
};

export default ConnectedApp;
