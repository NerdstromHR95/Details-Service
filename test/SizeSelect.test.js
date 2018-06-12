import React from 'react';
import SizeSelect from '../client/src/components/SizeSelect.jsx';
import renderer from 'react-test-renderer';

test('Should render closed menu', () => {
	const component = renderer.create(<SizeSelect menuDown={false} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})

test('Should render open menu', () => {
	const component = renderer.create(<SizeSelect menuDown={true} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})

test('Should render Small as selected', () => {
	const component = renderer.create(<SizeSelect menuDown={false} selected={'Small'} />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();	
})