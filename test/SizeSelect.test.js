import React from 'react';
import SizeSelect from '../client/src/components/SizeSelect.jsx';
import renderer from 'react-test-renderer';

test('Menu-Open state toggles when clicked', () => {
	const component = renderer.create(<SizeSelect />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();

	tree.props.onClick();

	tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})