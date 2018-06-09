import React from 'react';
import ColorSelect from '../client/src/components/ColorSelect.jsx';
import renderer from 'react-test-renderer';

test('Should open menu when clicked', () => {
	const component = renderer.create(<ColorSelect />);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();

	tree.props.onClick();

	tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})