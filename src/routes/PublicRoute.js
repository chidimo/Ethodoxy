import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import propTypes from 'prop-types';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <ErrorBoundary>
                        <div>
                            <NavBar />
                            <main
                                className="container"
                                id="public-route-layout"
                            >
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

PublicRoute.propTypes = {
    component: propTypes.object.isRequired,
    error: propTypes.bool
};

export default PublicRoute;
