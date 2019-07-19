import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLoader from './PageLoader';
import PublicRoute from '../routes/PublicRoute';
import Error404 from './Error404';

const env = process.env.NODE_ENV;
const path = env === 'development' ? '/' : '/Ethodoxy/';

const Home = lazy(() => import('./Home'));

const Routes = () => (
    <Router>
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <PublicRoute exact path={path} component={Home} />

                {/* catch all invalid urls */}
                <Route component={Error404} />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
