import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Cities from '../components/common/Cities/';

it('renders correctly', () => {
	const cities = shallow(
		<Cities />
	);
	expect(toJson(cities)).toMatchSnapshot();
});