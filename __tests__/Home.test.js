import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../src/components/Home';
import { RenderWithRouter } from './Renderers';

afterEach(cleanup);

describe('<Home /> ', () => {
    it('renders without crashing', () => {
        const { getByText } = RenderWithRouter(<Home />);
        expect(getByText('Douay-Rheims Bible')).toBeInTheDocument();
        expect(getByText('Challoner Commentary')).toBeInTheDocument();
    });
});
