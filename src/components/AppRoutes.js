import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import ErrorBoundary from './ErrorBoundary';


const AppRoutes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/drb' component={Landing}/>
            <Route component={ErrorBoundary}/>
        </Switch>
    )
}

export default AppRoutes