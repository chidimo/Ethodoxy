import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../src/components/Footer';
import { RenderWithRouter } from './Renderers';

afterEach(cleanup);

describe('<Footer /> ', () => {
    it('Displays correct message', () => {
        const { getByText } = RenderWithRouter(<Footer />);
        expect(getByText('Built with React and material UI by orjichidi95@gmail.com')).toBeInTheDocument();
    });
});
