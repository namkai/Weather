import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import WeatherHeader from '../components/common/WeatherHeader';

it('renders correctly', () => {
	const cities = shallow(<WeatherHeader />);
	expect(toJson(cities)).toMatchSnapshot();
});