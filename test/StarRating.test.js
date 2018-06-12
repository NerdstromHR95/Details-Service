import React from 'react';
import StarRating from '../client/src/components/StarRating.jsx';
import renderer from 'react-test-renderer';

test('Should render 4 stars', () => {
	const component = renderer.create(<StarRating starRating={'80'} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})