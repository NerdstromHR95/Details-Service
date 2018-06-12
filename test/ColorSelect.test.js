import React from 'react';
import ColorSelect from '../client/src/components/ColorSelect.jsx';
import renderer from 'react-test-renderer';

test('Should render closed menu', () => {
	const component = renderer.create(<ColorSelect menuDown={false} colors={['Black', 'White', 'Blue', 'Red', 'Green']} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})

test('Should render open menu', () => {
	const component = renderer.create(<ColorSelect menuDown={true} colors={['Black', 'White', 'Blue', 'Red', 'Green']} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})

test('Should render Red as selected', () => {
	const component = renderer.create(<ColorSelect menuDown={false} selected={'Red'} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();	
})