import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Map from '../components/Map';

it('renders correctly', () => {
	const map = shallow(<Map />);
	expect(toJson(map)).toMatchSnapshot();
});