import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLoader from './PageLoader';
import PublicRoute from '../routes/PublicRoute';
import Error404 from './Error404';

const Home = lazy(() => import('./Home'));
const DrbBooks = lazy(() => import('./DrbBooks'));
const DrbBook = lazy(() => import('./DrbBook'));
const Commentary = lazy(() => import('./Commentary'));

const Routes = () => (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute
                    exact
                    path="/douay-rheims-bible"
                    component={DrbBooks}
                />
                <PublicRoute
                    exact
                    path="/douay-rheims-bible/:book/:id"
                    component={DrbBook}
                />
                <PublicRoute
                    exact
                    path="/commentary/:comm_name"
                    component={Commentary}
                />

                {/* catch all invalid urls */}
                <Route component={Error404} />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
