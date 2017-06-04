import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import CurrentWeatherData from '../components/CurrentWeatherData';

it('renders correctly', () => {
	const currentweatherdata = shallow(<CurrentWeatherData />);
	expect(toJson(currentweatherdata)).toMatchSnapshot();
});