import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

/**Smoke test */
it('renders Card', () => {
	render(<Card />);
});
