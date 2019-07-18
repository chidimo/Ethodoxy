import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <ErrorBoundary>
                        <div>
                            <NavBar />
                            <main className="container" id="public-route-layout">
                                <Component {...props} />
                            </main>
                        </div>
                        <Footer />
                    </ErrorBoundary>
                );
            }}
        />
    );
};

export default PublicRoute;
