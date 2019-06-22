import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import "jest-dom/extend-expect"

import Landing from '../src/components/Landing.js'

afterEach(cleanup)

describe('<Landing /> ', () => {
    it('renders', () => {
        const { getByText } = render(<Landing />);
        expect(getByText('Welcome to ethodoxy.')).toBeInTheDocument();
        expect(getByText('Your electronic source of orthodox scriptures.')).toBeInTheDocument();
    });
});
