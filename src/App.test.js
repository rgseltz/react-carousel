import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

/**Smoke test */
it('renders App', () => {
	render(<App />);
});
