import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLoader from "./PageLoader";
import PublicRoute from "../routes/PublicRoute";
import Error404 from "./Error404";

// create Loadable pages
const Home = lazy(() => import("./Home"));

const Routes = () => (
    <Router>
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <PublicRoute exact path="/" component={Home} />

                {/* catch all invalid urls */}
                <Route component={Error404} />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
