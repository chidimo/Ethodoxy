import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLoader from './PageLoader';
import PublicRoute from '../routes/PublicRoute';
import Error404 from './Error404';

const Home = lazy(() => import('./Home'));
const DouayBooks = lazy(() => import('./DrbBooks'));

const Routes = () => (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <PublicRoute exact path='/' component={ Home } />
                <PublicRoute exact path='/douay-rheims-bible' component={ DouayBooks } />

                {/* catch all invalid urls */}
                <Route component={Error404} />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
