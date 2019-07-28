import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Error404 from '../src/components/Error404';
import { RenderWithRouter } from './Renderers';

describe('<Error404 /> ', () => {
    it('Displays error message', () => {
        const location = { pathname: 'unknown-path' };
        const { getByText } = RenderWithRouter(<Error404 location={ location } />);
        expect(getByText('Error: 404')).toBeInTheDocument();
        expect(getByText('The requested url' , { exact: false })).toBeInTheDocument();
        expect(getByText('unknown-path' , { exact: false })).toBeInTheDocument();
        expect(getByText('was not found on the server' , { exact: false })).toBeInTheDocument();
    });
});
