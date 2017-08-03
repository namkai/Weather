import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import City from '../components/common/City';

it('renders correctly', () => {
	const city = shallow(<City />);
	expect(toJson(city)).toMatchSnapshot();
});