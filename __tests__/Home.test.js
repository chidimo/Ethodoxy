import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../src/components/Home';
import { RenderWithReduxAndRouter } from './Renderers';
import utils from '../src/actions/utils';

describe('<Home /> ', () => {
    it('renders without crashing', async () => {
        utils.getPaginatedItems = jest.fn().mockImplementationOnce(() => ({
            books: []
        }));
        const { getByText } = RenderWithReduxAndRouter(<Home />);
        expect(getByText('Douay-Rheims Bible')).toBeInTheDocument();
        expect(getByText('Challoner Commentary')).toBeInTheDocument();
    });
});
