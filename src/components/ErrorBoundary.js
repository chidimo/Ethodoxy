import React from 'react';

const ErrorBoundary = ({ location }) => (
    <div>
        <h3>Error: 404</h3>
        <p>The requested url <code>{ location.pathname }</code> was not found on the server.</p>
    </div>
)

export default ErrorBoundary;
