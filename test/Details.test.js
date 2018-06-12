import React from 'react';
import Details from '../client/src/components/Details.jsx';
import renderer from 'react-test-renderer';

test('Should toggle size menu', () => {
	const component = renderer.create(<Details />);
	let tree = component.toJSON();
	
	expect(tree).toMatchSnapshot();

	tree.children[0].children[2].children[6].children[1].props.onClick();

	tree = component.toJSON();

	expect(tree).toMatchSnapshot();
})