import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import ConnectedApp from '../src/ConnectedApp';
import { RenderWithRedux } from './Renderers';

describe('<ConnectedApp /> ', () => {
    it('renders without crashing', () => {
        const { getByText } = RenderWithRedux(<ConnectedApp />);
        expect(getByText('Ethodoxy')).toBeInTheDocument();
        expect(true).toBe(true);
    });
});
