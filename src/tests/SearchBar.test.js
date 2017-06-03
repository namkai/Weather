import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SearchBar } from '../components/SearchBar';

it('renders correctly', () => {
	const searchbar = shallow(
		<SearchBar >
			<strong>Hello World!</strong>
		</SearchBar>,
	);
	expect(toJson(searchbar)).toMatchSnapshot();
});
