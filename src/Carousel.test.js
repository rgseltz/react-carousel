import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

/**Smoke test */
it('renders Carousel', () => {
	render(<Carousel />);
});

it('make and test snapshot', () => {
	const { asFragment } = render(<Carousel />);
	expect(asFragment()).toMatchSnapshot();
});

it('works when you click on the right arrow', function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId('right-arrow');
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
});

it('works when you click on the left arrow', function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);
	// move forward in the carousel
	const rightArrow = queryByTestId('right-arrow');
	fireEvent.click(rightArrow);
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
	const leftArrow = queryByTestId('left-arrow');

	//move backward to previous image in the carousel
	fireEvent.click(leftArrow);

	//expect the first image to show
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
});

it('left arrow is missing when on first image', () => {
	const { queryByTestId } = render(<Carousel />);
	expect(queryByTestId('left-arrow')).not.toBeInTheDocument();
});
